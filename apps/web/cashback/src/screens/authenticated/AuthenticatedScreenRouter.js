import React, { Fragment, Component, Suspense } from 'react'
import PropTypes from 'prop-types'
import { Route, Switch, Redirect } from 'react-router-dom'
import withLayout from '../../layouts'
// import AuthenticatedModalsRouter from '../../modals/authenticated/AuthenticatedModalsRouter'

import InitialScreen from './InitialScreen'
import SentNoteScreen from './SentNoteScreen'
import QRCodeScreen from './QRCodeScreen'

class AuthenticatedScreenRouter extends Component {
  render() {
    return (
      <Fragment>
        {/* <AuthenticatedModalsRouter /> */}

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
            path="/sent-note/:noteId"
            exact
            component={
              props => (
                <Suspense fallback={ <div /> }>
                  <SentNoteScreen { ...{ ...props, ...this.props } } />
                </Suspense>
              )
            }
          />
          <Route
            path="/use"
            exact
            component={
              props => (
                <Suspense fallback={ <div /> }>
                  <QRCodeScreen { ...{ ...props, ...this.props } } />
                </Suspense>
              )
            }
          />
          <Route
            component={
              () => <Redirect to="/" />
            }
          />
        </Switch>
      </Fragment>
    )
  }
}

AuthenticatedScreenRouter.propTypes = {
  auth: PropTypes.object
}

AuthenticatedScreenRouter.defaultProps = {
  auth: {}
}

export default withLayout('authenticated')(AuthenticatedScreenRouter)
