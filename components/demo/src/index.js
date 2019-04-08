import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

import styles from './styles'

const ComponentDemo = (props) => {
  const {
    classes,
    history,
    redirectTo
  } = props

  return (
    <div className={ classes.container }>
      <h3>My component Demo!</h3>
      <Button
        color="primary"
        variant="raised"
        onClick={ () => history.push(redirectTo) }
      >
        My Button
      </Button>
    </div>
  )
}

ComponentDemo.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  redirectTo: PropTypes.string.isRequired
}

export default withStyles(styles)(ComponentDemo)
