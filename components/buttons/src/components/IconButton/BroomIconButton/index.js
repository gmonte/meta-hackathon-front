import React from 'react'
import PropTypes from 'prop-types'
import BroomIcon from '@nanoteam/c-icons/src/BroomIcon'
import IconButton from '../IconButton'

const BroomIconButton = ({ iconProps, ...props }) => (
  <IconButton
    tooltip="Limpar"
    { ...props }
  >
    <BroomIcon { ...iconProps } />
  </IconButton>
)

BroomIconButton.propTypes = {
  iconProps: PropTypes.object
}

BroomIconButton.defaultProps = {
  iconProps: {}
}

export default BroomIconButton
