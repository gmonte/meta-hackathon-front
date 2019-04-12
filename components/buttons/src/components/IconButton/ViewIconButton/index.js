import React from 'react'
import EyeIcon from '@jqcode/c-icons/src/EyeIcon'
import PropTypes from 'prop-types'
import IconButton from '../IconButton'

const ViewIconButton = ({ iconProps, ...props }) => (
  <IconButton
    tooltip="Visualizar"
    { ...props }
  >
    <EyeIcon { ...iconProps } />
  </IconButton>
)
ViewIconButton.propTypes = {
  iconProps: PropTypes.object
}

ViewIconButton.defaultProps = {
  iconProps: {}
}

export default ViewIconButton
