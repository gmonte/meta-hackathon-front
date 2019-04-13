import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Button from '@jqcode/c-buttons/src/components/Button'

import styles from './styles'

class InitialScreen extends Component {
  render() {
    const {
      auth: {
        signOut,
        loading
      }
    } = this.props

    return (
      <div>
        <h2>Initial authenticated screen</h2>
        <Button onClick={ signOut } loading={ loading }>
          Logout
        </Button>
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
