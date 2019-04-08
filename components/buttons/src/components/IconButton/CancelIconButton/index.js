import React from 'react'
import CancelIcon from '@nanoteam/c-icons/src/CancelIcon'
import IconButton from '../IconButton'


const CancelIconButton = props => (
  <IconButton
    tooltip="Cancelar"
    { ...props }
  >
    <CancelIcon />
  </IconButton>
)

export default CancelIconButton
