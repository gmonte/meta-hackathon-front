import React from 'react'
import CashIcon from '@jqcode/c-icons/src/CashIcon'
import IconButton from '../IconButton'

const CashIconButton = props => (
  <IconButton
    tooltip="Realizar Faturamento"
    { ...props }
  >
    <CashIcon />
  </IconButton>
)
export default CashIconButton
