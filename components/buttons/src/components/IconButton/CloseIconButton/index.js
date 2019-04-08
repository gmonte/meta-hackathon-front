import React from 'react'
import CloseIcon from '@nanoteam/c-icons/src/CloseIcon'
import IconButton from '../IconButton'

const CloseIconButton = props => (
  <IconButton
    tooltip="Fechar"
    { ...props }
  >
    <CloseIcon />
  </IconButton>
)
export default CloseIconButton
