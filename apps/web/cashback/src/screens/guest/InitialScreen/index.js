import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import Button from '@jqcode/c-buttons/src/components/Button'
import Grid from '@material-ui/core/Grid'
import { getDataList } from '@jqcode/s-firebase'

import styles from './styles'

class InitialScreen extends Component {
  constructor(props) {
    super(props)
    this.getUsers = this.getUsers.bind(this)
    this.createUser = this.createUser.bind(this)
    this.signUser = this.signUser.bind(this)
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

  render() {
    const {
      classes,
      // history
      auth: {
        loading
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
          <Button onClick={ this.signUser } loading={ loading }>
            Login
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
