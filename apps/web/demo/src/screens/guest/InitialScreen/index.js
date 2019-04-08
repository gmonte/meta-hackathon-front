import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import ComponentDemo from '@midig/c-demo'

import styles from './styles'

class InitialScreen extends Component {
  render() {
    const {
      // classes,
      history
    } = this.props

    return (
      <div>
        <h2>Initial screen</h2>
        <ComponentDemo
          history={ history }
          redirectTo="/other-page"
        />
      </div>
    )
  }
}

InitialScreen.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired
}

export default withStyles(styles)(InitialScreen)
