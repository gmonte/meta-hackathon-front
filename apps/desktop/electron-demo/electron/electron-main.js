/* eslint-disable global-require,import/newline-after-import,function-paren-newline,no-multiple-empty-lines,max-len */
const { app, BrowserWindow, ipcMain } = require('electron')
const pkgJson = require('../package.json')
const get = require('lodash/get')
const isObject = require('lodash/isObject')
const log = require('electron-log')
const httpServer = require('node-http-server')
const kill = require('kill-port')

// fix win7 proxy server (optimize requests)
app.commandLine.appendSwitch('no-proxy-server')

// all windows of application
let windows = {}

const serverOpts = {
  domain: 'localhost',
  port: 3011,
  root: `${ __dirname }/build`
}

const isDev = process.env.ELECTRON_ENV === 'development'

log.info('App starting...')
log.info('dev mode:', isDev)

const initServer = () => new Promise((resolve) => {
  httpServer.deploy(serverOpts, (server) => {
    log.info(`web server on port ${ server.config.port } is now up`)
    resolve()
  })
})

/*
* START APPLICATION
* */
function createMainWindow() {
  return new Promise((resolve) => {
    log.info('starting local web server..')

    initServer()
      .then(() => {
        // const appTemplatePath = `file://${ __dirname }/build/index.html`
        const appTemplatePath = `http://${ serverOpts.domain }:${ serverOpts.port }`

        log.info('creating main window...')
        const mainWindow = new BrowserWindow({
          width: 1920,
          height: 1080,
          show: false
        })

        mainWindow.loadURL(appTemplatePath)

        mainWindow.once('ready-to-show', () => {
          log.info('Application is opened and working.')
          mainWindow.show()
        })

        mainWindow.webContents.once('did-finish-load', () => {
          log.info('sending configs to react renderer process')
          mainWindow.webContents.send('react', {
            version: get(pkgJson, 'version')
          })
          resolve()
        })

        // if the render process crashes, reload the window
        mainWindow.webContents.on('crashed', (e) => {
          if (isObject(e)) {
            try {
              e = JSON.stringify(e)
            } catch (err) {
              log.error(`error when stringify the json application error ${ e }`)
            }
          }
          log.error(`Application was crashed: ${ e.toString() }`)
          runApp()
          mainWindow.destroy()
        })

        // Emitted when the window is closed.
        mainWindow.on('closed', () => {
          // Dereference the window object, usually you would store windows
          // in an array if your app supports multi windows, this is the time
          // when you should delete the corresponding element.
          mainWindow = null
        })

        if (process.env.DEV_TOOLS === true.toString()) {
          mainWindow.openDevTools()
        }

        windows = {
          ...windows,
          mainWindow
        }
      })
      .catch(() => {
        try {
          kill(serverOpts.port)
          log.info('web server disconnected')
        } catch (e) {
          log.error(`could not shut down web server: ${ e.toString() }`)
        }
      })
  })
}

app.on('ready', () => {
  createMainWindow()
})

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('will-quit', () => {
  appIsRunning = false
  log.info('disconnecting web server...')
  try {
    kill(serverOpts.port)
    log.info('web server disconnected')
  } catch (e) {
    log.error(`could not shut down web server: ${ e.toString() }`)
  }
  log.info('Application was closed!')
})


app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (!windows.mainWindow) {
    createMainWindow()
  }
})

ipcMain.on('log-internal', (event, { type, str }) => {
  const logType = get(log, type, log.info)
  logType(str)
})
