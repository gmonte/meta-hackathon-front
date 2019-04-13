import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Button from '@jqcode/c-buttons/src/components/Button'
import { getDataList } from '@jqcode/s-firebase'
import TextInput from '@jqcode/inputs/src/components/TextInput'

import styles from './styles'

class InitialScreen extends Component {
  constructor(props) {
    super(props)
    this.getUsers = this.getUsers.bind(this)
    this.createUser = this.createUser.bind(this)
    this.signUser = this.signUser.bind(this)
    this.signGoogleUser = this.signGoogleUser.bind(this)
    this.signFacebookUser = this.signFacebookUser.bind(this)
  }

  componentDidMount() {
    // this.getUsers()
    // this.createUser()
    // this.signUser()
  }

  async getUsers() {
    const response = await getDataList('users')
    console.warn('users list', response)
  }

  async createUser() {
    const {
      auth: {
        createUserWithEmailAndPassword
      }
    } = this.props

    createUserWithEmailAndPassword({
      email: 'email@test.com',
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

  async signGoogleUser() {
    const {
      auth: {
        signInWithGoogle
      }
    } = this.props

    signInWithGoogle()
  }

  async signFacebookUser() {
    const {
      auth: {
        signInWithFacebook
      }
    } = this.props

    signInWithFacebook()
  }

  render() {
    const {
      classes,
      // history
      auth: {
        loading
      }
    } = this.props

    return (
      <div
        className={ classes.container }
      >
        <Button
          onClick={ this.signUser }
          loading={ loading }
          vertical
          btnClass={ classes.buttons }
        >
          Login
        </Button>
        <Button
          onClick={ this.signFacebookUser }
          loading={ loading }
          vertical
          btnClass={ classes.buttons }
        >
          Facebook
        </Button>
        <Form

        >
          <TextInput name="email" className={ classes.inputs } />
          <TextInput name="senha" className={ classes.inputs } />
        </Form>
      </div>
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
