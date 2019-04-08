import React from 'react'
import OpenInNewIcon from '@nanoteam/c-icons/src/OpenInNewIcon'
import PropTypes from 'prop-types'
import IconButton from '../IconButton'

const ViewIconButton = ({ iconProps, ...props }) => (
  <IconButton
    tooltip="Acessar"
    { ...props }
  >
    <OpenInNewIcon { ...iconProps } />
  </IconButton>
)
ViewIconButton.propTypes = {
  iconProps: PropTypes.object
}

ViewIconButton.defaultProps = {
  iconProps: {}
}

export default ViewIconButton
