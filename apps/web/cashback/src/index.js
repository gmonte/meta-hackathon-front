import React from 'react'
import { render } from 'react-dom'
import { enableLogging } from 'mobx-logger'
import ScreenRouter from './screens/ScreenRouter'

if (process.env.NODE_ENV === 'development') {
  console.groupCollapsed = console.group // fix mobx logger to birth opened
  enableLogging({
    action: true,
    reaction: false,
    compute: false
  })
}

render(
  <ScreenRouter />,
  document.getElementById('root')
)
