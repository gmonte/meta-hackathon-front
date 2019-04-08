import React, { Fragment, Component, Suspense } from 'react'
import PropTypes from 'prop-types'
import flow from 'lodash/fp/flow'
import { HashRouter as Router } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import { withJssThemeProvider } from '@nanoteam/c-styles'
import withSnackbars from '@nanoteam/c-snackbars/src/actions/withSnackbars'
import supportsHistory from '@nanoteam/functions/src/supportsHistory'
import GuestScreenRouter from './guest/GuestScreenRouter'

import globalStyles from './globalStyles'

const forceRefresh = !supportsHistory()

class ScreenRouter extends Component {
  render() {
    return (
      <Router forceRefresh={ forceRefresh }>
        <Fragment>
          <Suspense fallback={ <div /> }>
            <GuestScreenRouter />
          </Suspense>
        </Fragment>
      </Router>
    )
  }
}

ScreenRouter.propTypes = {
  classes: PropTypes.object.isRequired
}

export default flow(
  withSnackbars(),
  withJssThemeProvider(),
  withStyles(globalStyles)
)(ScreenRouter)
