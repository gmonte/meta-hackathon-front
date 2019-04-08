/* eslint-disable */
const autoprefixer = require('autoprefixer')
const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const Dotenv = require('dotenv-webpack')
const SimpleProgressWebpackPlugin = require( 'simple-progress-webpack-plugin' )
const CreateFileWebpack = require('create-file-webpack')
const tail = require('lodash/tail')
const fs = require('fs')
const { exec } = require('child_process')

module.exports = (configs) => {
  const {
    dirname,
    pkgJson,
    octoberPath,
    layoutHtmOptions,
    layoutHtmHeader,
    pageHtmOptions
  } = configs

  const themeName = tail(pkgJson.name.split('/')).join('')

  const createThemeYaml = () =>
    `name: ${ themeName }
version: ${ pkgJson.version }
description: '${ pkgJson.description }'
author: Midig
homepage: 'https://midig.com.br'
`

  const createLayoutDefault = () =>
    `title = "Index"
url = "/"
layout = "default"
is_hidden = 0
${ layoutHtmOptions }
==`

  const createPageDefault = () =>
    `title = "Index"
url = "/"
layout = "default"
is_hidden = 0
${ pageHtmOptions }
==`

  const modifyLayoutHtm = () => {
    return new Promise((resolve, reject) => {
      try {
        const favicon = `<link rel="shortcut icon" href="{{ 'assets/favicon.ico'|theme }}">`

        const file = path.resolve(dirname, `../dist/${ themeName }/layouts/default.htm`)
        let fileContent = fs.readFileSync(file, 'utf8')
        fileContent = fileContent
          .split('</head>')
          .join(`${ layoutHtmHeader }${ favicon }</head>`)

        writeFile(file, `
${ createLayoutDefault() }
${ fileContent }`)

        resolve(copyFile(
          path.resolve(dirname, '../public/favicon.ico'),
          path.resolve(dirname, `../dist/${ themeName }/assets/favicon.ico`)
        ))

        resolve()
      }
      catch (e) {
        reject(e)
      }
    })
  }

  const writeFile = (file, fileContent) => {
    return new Promise((resolve, reject) => {
      fs.writeFile(file, fileContent, err => (err ? reject(err) : resolve()))
    });
  }

  const copyFile = (from, to) => {
    return new Promise((resolve, reject) => {
      fs.copyFile(from, to, err => (err ? reject(err) : resolve()))
    });
  }

  const publishAfterBuild = () => {
    const octoberThemesPathRef = `../${ octoberPath }/themes/`
    exec(
      `rm -rf ${ path.resolve(dirname, `${ octoberThemesPathRef }${ themeName }`) }`,
      (err) => {
        if (err) {
          // node couldn't execute the command
          console.error('Set the "octoberPath" in "config/october.config.js"')
          return
        }
        console.log(`cp -R dist/* ${ path.resolve(dirname, octoberThemesPathRef) }`)
        exec(
          `cp -R dist/* ${ path.resolve(dirname, octoberThemesPathRef) }`,
          (err2) => {
            if (err2) {
              // node couldn't execute the command
              console.error('Something is wrong! Check your permissions at "octoberPath".')
              return
            }
            console.log(`Theme was published in "${ octoberThemesPathRef }${ themeName }"`)
          }
        )
      }
    )
  }


  return (env, argv) => {
    const {
      mode,
      publish
    } = argv

    return {
      entry: {
        main: path.resolve(dirname, `../src/index.js`),
      },
      output: {
        path: path.resolve(dirname, `../dist/${ themeName }`),
        filename: 'assets/[name].js',
        chunkFilename: `assets/[name].js`,
        publicPath: `themes/${ themeName }/`
      },
      resolve: {
        modules: [
          'node_modules',
        ],
        symlinks: false
      },
      watchOptions: {
        poll: true
      },
      devServer: {
        noInfo: false,
        port: 3000,
        open: true
      },
      plugins: [
        new Dotenv({
          path: path.resolve(dirname, `../.env.${ argv.mode }`),
          systemvars: true
        }),
        new SimpleProgressWebpackPlugin({
          format: 'compact'
        }),
        new HtmlWebPackPlugin({
          hash: true,
          template: path.resolve(dirname, '../public/index.html'),
          filename: 'layouts/default.htm'
        }),
        new CreateFileWebpack({
          // path to folder in which the file will be created
          path: path.resolve(dirname, `../dist/${ themeName }`),
          // file name
          fileName: 'theme.yaml',
          // content of the file
          content: createThemeYaml()
        }),
        new CreateFileWebpack({
          // path to folder in which the file will be created
          path: path.resolve(dirname, `../dist/${ themeName }/pages`),
          // file name
          fileName: 'default.htm',
          // content of the file
          content: createPageDefault()
        }),
        {
          apply: compiler => compiler.hooks.afterEmit.tap('AfterEmitPlugin', () => {
            modifyLayoutHtm().then(() => {
              if (publish) {
                publishAfterBuild()
              }
            })
          })
        }
      ],
      module: {
        rules: [
          {
            test: /\.svg$/,
            loader: 'svg-inline-loader'
          },
          // "url" loader works just like "file" loader but it also embeds
          // assets smaller than specified size as data URLs to avoid requests.
          {
            test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
            loader: require.resolve('url-loader'),
            options: {
              limit: 10000,
              name: 'assets/static/media/[name].[hash:8].[ext]',
            },
          },
          {
            test: /\.jsx?$/,
            exclude: /node_modules\/(?!@midig)/,
            use: {
              loader: require.resolve('babel-loader'),
              options: {
                rootMode: 'upward'
              }
            },
          },
          {
            test: /\.html$/,
            use: [
              {
                loader: 'html-loader',
                options: { minimize: true },
              },
            ],
          },
          {
            test: /\.css$/,
            use: [
              require.resolve('style-loader'),
              {
                loader: require.resolve('css-loader'),
                options: {
                  importLoaders: 1,
                },
              },
              {
                loader: require.resolve('postcss-loader'),
                options: {
                  // Necessary for external CSS imports to work
                  // https://github.com/facebookincubator/create-react-app/issues/2677
                  ident: 'postcss',
                  plugins: () => [
                    require('postcss-flexbugs-fixes'),
                    autoprefixer({
                      browsers: [
                        '>1%',
                        'last 4 versions',
                        'Firefox ESR',
                        'not ie < 9', // React doesn't support IE8 anyway
                      ],
                      flexbox: 'no-2009',
                    }),
                  ],
                },
              },
            ],
          }
        ],
      },
      optimization: {
        splitChunks: {
          name: true,
          chunks: 'all',
        }
      }
    }
  }
}
