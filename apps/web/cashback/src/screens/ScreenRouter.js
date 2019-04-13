import React, { Fragment, Component, Suspense } from 'react'
import PropTypes from 'prop-types'
import 'moment/locale/pt-br'
import { HashRouter as Router } from 'react-router-dom'
import flow from 'lodash/fp/flow'
import { withStyles } from '@material-ui/core/styles'
import { withJssThemeProvider } from '@jqcode/c-styles'
import withSnackbars from '@jqcode/c-snackbars/src/actions/withSnackbars'
import supportsHistory from '@jqcode/functions/src/supportsHistory'
import AuthenticatedScreenRouter from './authenticated/AuthenticatedScreenRouter'
import GuestScreenRouter from './guest/GuestScreenRouter'

import globalStyles from './globalStyles'

const forceRefresh = !supportsHistory()

class ScreenRouter extends Component {
  constructor(props) {
    super(props)

    this.state = {
      auth: {
        isAuthenticated: false
      }
    }

    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
  }

  login() {
    this.setState(prevState => ({
      ...prevState,
      auth: {
        ...prevState.auth,
        isAuthenticated: true
      }
    }))
  }

  logout() {
    this.setState(prevState => ({
      ...prevState,
      auth: {
        ...prevState.auth,
        isAuthenticated: false
      }
    }))
  }

  render() {
    const { auth } = this.state
    const {
      isAuthenticated
    } = auth

    const RouterContext = isAuthenticated
      ? AuthenticatedScreenRouter
      : GuestScreenRouter

    console.warn('isAuthenticated', false)

    return (
      <Router forceRefresh={ forceRefresh }>
        <Fragment>
          <Suspense fallback={ <div /> }>
            <RouterContext
              auth={ {
                ...auth,
                login: this.login,
                logout: this.logout
              } }
            />
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
