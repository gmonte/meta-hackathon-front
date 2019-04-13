import React, { Component } from 'react'
import PropTypes from 'prop-types'
import flow from 'lodash/fp/flow'
import { inject, observer, PropTypes as MobxPropTypes } from 'mobx-react'
import { withStores } from '@jqcode/c-stores-provider'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Button from '@jqcode/c-buttons/src/components/Button'
import FormLogin from '@jqcode/f-login'
import authStore from '@jqcode/s-firebase/src/store/auth'

import globalStyles from '../../globalStyles'

@inject('authStore')
@observer
class InitialScreen extends Component {
  render() {
    const {
      classes,
      // history
      authStore: store
    } = this.props

    const {
      loading,
      signInWithFacebook,
      signInWithGoogle
    } = store


    return (
      <Grid
        container
        wrap="wrap"
      >
        <Grid
          item
          lg={ 12 }
          md={ 12 }
          sm={ 12 }
          xm={ 12 }
          className={ classes.container }
        >
          <Button onClick={ this.signUser }>
            Login Email
          </Button>
          <Button onClick={ signInWithFacebook }>
            Login Facebook
          </Button>
          <Button onClick={ signInWithGoogle }>
            Login Google
          </Button>

          <FormLogin
            loading={ loading }
            auth={ store }
          />
        </Grid>
      </Grid>
    )
  }
}

InitialScreen.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  // eslint-disable-next-line react/require-default-props
  authStore: MobxPropTypes.objectOrObservableObject
}

export default flow(
  withStores({ authStore }),
  withStyles(globalStyles)
)(InitialScreen)
