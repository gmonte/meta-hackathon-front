import React from 'react'
import CashRegisterIcon from '@nanoteam/c-icons/src/CashRegisterIcon'
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
