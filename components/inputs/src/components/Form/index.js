import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

import styles from './styles'

class Form extends Component {
  render() {
    const {
      classes,
      children,
      containerClass,
      store
    } = this.props

    return (
      <React.Fragment>
        <form
          noValidate // desabilita html5 API validation
          className={ [classes.container, containerClass].join(' ') }
          onSubmit={
            (e) => {
              // desativa submit automatico do browser
              // por conta da semântica do html
              e.preventDefault()
              store.submit()
            }
          }
        >
          { children }
        </form>
      </React.Fragment>
    )
  }
}

Form.propTypes = {
  store: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  controls: PropTypes.object.isRequired,
  item: PropTypes.object,
  onSuccess: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ]).isRequired,
  mode: PropTypes.object.isRequired,
  containerClass: PropTypes.string
}

Form.defaultProps = {
  item: {},
  onSuccess: () => {},
  containerClass: null
}

export default withStyles(styles)(Form)
