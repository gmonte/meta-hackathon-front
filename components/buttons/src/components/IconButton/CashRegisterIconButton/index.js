import React from 'react'
import CashRegisterIcon from '@jqcode/c-icons/src/CashRegisterIcon'
import IconButton from '../IconButton'

const CashRegisterIconButton = props => (
  <IconButton
    tooltip="Cancelar"
    { ...props }
  >
    <CashRegisterIcon />
  </IconButton>
)
export default CashRegisterIconButton
