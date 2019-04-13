import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import Button from '@jqcode/c-buttons/src/components/Button'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { getDataList } from '@jqcode/s-firebase'
import Divider from '@material-ui/core/Divider'
// import FacebookIcon from '@jqcode/c-icons/src/FacebookIcon'
import ActiveIcon from '@jqcode/c-icons/src/ActiveIcon'
import GoogleIcon from 'mdi-material-ui/Google'
import FacebookIcon from 'mdi-material-ui/FacebookBox'
import AccountIcon from 'mdi-material-ui/Account'

import styles from './styles'

class InitialScreen extends Component {
  constructor(props) {
    super(props)
    this.createUser = this.createUser.bind(this)
    this.signUser = this.signUser.bind(this)
  }

  componentDidMount() {
    // this.getUsers()
    // this.createUser()
    // this.signUser()
  }

  async createUser() {
    const {
      auth: {
        createUserWithEmailAndPassword
      }
    } = this.props

    createUserWithEmailAndPassword({
      email: 'email2@test.com',
      password: '123456'
    })
  }

  async signUser() {
    const {
      auth: {
        signInWithEmailAndPassword
      }
    } = this.props

    signInWithEmailAndPassword({
      email: 'email@test.com',
      password: '123456'
    })
  }

  render() {
    const {
      classes,
      // history
      auth: {
        loading,
        signInWithFacebook,
        signInWithGoogle
      }
    } = this.props

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
          <Typography variant="subtitle2"><b>Entre ou crie sua conta.</b></Typography>
          <Divider light variant="middle" style={ { width: '70%', height: '2px', margin: '5px' } } />
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
          <Button
            onClick={ this.createUser }
            loading={ loading }
            btnClass={ [classes.buttons, classes.login].join(' ') }
            iconLeft={ AccountIcon }

          >
            <span>Entrar</span>
          </Button>
        </Grid>
      </Grid>
    )
  }
}

InitialScreen.propTypes = {
  classes: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired
}

export default withStyles(styles)(InitialScreen)
