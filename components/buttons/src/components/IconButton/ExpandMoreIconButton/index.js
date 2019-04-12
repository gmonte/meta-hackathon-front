import React from 'react'
import PropTypes from 'prop-types'
import ExpandMoreIcon from '@jqcode/c-icons/src/ExpandMoreIcon'
import IconButton from '../IconButton'

const ExpandMoreIconButton = ({ iconProps, ...props }) => (
  <IconButton
    tooltip="Expandir"
    disableRipple
    { ...props }
  >
    <ExpandMoreIcon
      color="primary"
      { ...iconProps }
    />
  </IconButton>
)

ExpandMoreIconButton.propTypes = {
  iconProps: PropTypes.object
}

ExpandMoreIconButton.defaultProps = {
  iconProps: {}
}

export default ExpandMoreIconButton
