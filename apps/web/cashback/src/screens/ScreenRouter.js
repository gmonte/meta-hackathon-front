import React, { Fragment, Component, Suspense } from 'react'
import PropTypes from 'prop-types'
import 'moment/locale/pt-br'
import { HashRouter as Router } from 'react-router-dom'
import flow from 'lodash/fp/flow'
import { inject, observer, PropTypes as MobxPropTypes } from 'mobx-react'
import { withStyles } from '@material-ui/core/styles'
import { withStores } from '@jqcode/c-stores-provider'
import { withJssThemeProvider } from '@jqcode/c-styles'
import withSnackbars from '@jqcode/c-snackbars/src/actions/withSnackbars'
import supportsHistory from '@jqcode/functions/src/supportsHistory'
import CircularIndeterminate from '@jqcode/c-loaders/src/components/CircularIndeterminate'
import authStore from '@jqcode/s-firebase/src/store/auth'
import AuthenticatedScreenRouter from './authenticated/AuthenticatedScreenRouter'
import GuestScreenRouter from './guest/GuestScreenRouter'


import globalStyles from './globalStyles'

const forceRefresh = !supportsHistory()

@inject('authStore')
@observer
class ScreenRouter extends Component {
  render() {
    const {
      classes,
      authStore: {
        isAuthenticated,
        done
      }
    } = this.props

    if (!done) {
      return (
        <div className={ classes.waitingFirebase }>
          <CircularIndeterminate />
        </div>
      )
    }

    const RouterContext = isAuthenticated
      ? AuthenticatedScreenRouter
      : GuestScreenRouter

    return (
      <Router forceRefresh={ forceRefresh }>
        <Fragment>
          <Suspense fallback={ <div /> }>
            <RouterContext />
          </Suspense>
        </Fragment>
      </Router>
    )
  }
}

ScreenRouter.propTypes = {
  classes: PropTypes.object.isRequired,
  // eslint-disable-next-line react/require-default-props
  authStore: MobxPropTypes.objectOrObservableObject
}

export default flow(
  withStores({ authStore }),
  withSnackbars(),
  withJssThemeProvider(),
  withStyles(globalStyles)
)(ScreenRouter)
