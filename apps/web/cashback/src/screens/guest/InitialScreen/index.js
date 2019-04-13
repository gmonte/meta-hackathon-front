import React, { Component } from 'react'
import PropTypes from 'prop-types'
import flow from 'lodash/fp/flow'
import { inject, observer, PropTypes as MobxPropTypes } from 'mobx-react'
import { withStores } from '@jqcode/c-stores-provider'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { getDataList } from '@jqcode/s-firebase'
import Divider from '@material-ui/core/Divider'
import ActiveIcon from '@jqcode/c-icons/src/ActiveIcon'
import GoogleIcon from 'mdi-material-ui/Google'
import FacebookIcon from 'mdi-material-ui/FacebookBox'
import AccountIcon from 'mdi-material-ui/Account'
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
          <Typography variant="subtitle2" style={ { textAlign: 'center'} }><b>Entre ou crie sua conta.</b></Typography>
          <Divider light variant="middle" style={ { width: '100%', height: '2px', margin: '5px' } } />
          <Button
            onClick={ signInWithFacebook }
            loading={ loading }
            btnClass={ [classes.buttons, classes.facebook].join(' ') }
            iconLeft={ FacebookIcon }
          >
            <span>Entrar com Facebook</span>
          </Button>
          <Button
            onClick={ signInWithGoogle }
            loading={ loading }
            btnClass={ [classes.buttons, classes.google].join(' ') }
            iconLeft={ GoogleIcon }
          >
            <span>Entrar com Google</span>
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
