import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import Button from '@jqcode/c-buttons/src/components/Button'
import Grid from '@material-ui/core/Grid'

import styles from './styles'

class InitialScreen extends Component {
  render() {
    const {
      classes,
      // history
      auth: {
        login
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
          <Button onClick={ login }>
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
