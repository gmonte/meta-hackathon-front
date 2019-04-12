import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Button from '@jqcode/c-buttons/src/components/Button'

import styles from './styles'

const ComponentDemo = (props) => {
  const {
    classes,
    history,
    redirectTo
  } = props

  return (
    <div className={ classes.container }>
      <h3>My feature Demo!</h3>
      <Button
        onClick={
          () => {
            history.push(redirectTo)
            window.snackbar.warn('Essa página não existe', { copyButton: true })
          }
        }
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
