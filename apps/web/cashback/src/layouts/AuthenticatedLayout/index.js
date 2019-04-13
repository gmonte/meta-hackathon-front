import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

import styles from './styles'

class AuthenticatedLayout extends PureComponent {
  render() {
    const {
      children
    } = this.props

    return children
  }
}

AuthenticatedLayout.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.element,
  auth: PropTypes.object
}
AuthenticatedLayout.defaultProps = {
  auth: {},
  children: () => null
}

export default withStyles(styles)(AuthenticatedLayout)
