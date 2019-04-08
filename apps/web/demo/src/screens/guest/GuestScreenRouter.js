import React, { Fragment, Component, Suspense, lazy } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import withLayout from '../../layouts'
// import GuestModalsRouter from '../../modals/guest/GuestModalsRouter'

const InitialScreen = lazy(() => import('./InitialScreen'))
const NotFoundScreen = lazy(() => import('../errors/NotFoundScreen'))

class GuestScreenRouter extends Component {
  render() {
    return (
      <Fragment>
        <Suspense fallback={ <div /> }>
          {/* <GuestModalsRouter /> */}

          <Switch>
            <Route
              path="/"
              exact
              component={
                props => (
                  <Suspense fallback={ <div /> }>
                    <InitialScreen { ...{ ...props, ...this.props } } />
                  </Suspense>
                )
              }
            />
            <Route
              exact
              render={
                () => <NotFoundScreen />
              }
            />
          </Switch>
        </Suspense>
      </Fragment>
    )
  }
}

export default withLayout('guest')(GuestScreenRouter)
