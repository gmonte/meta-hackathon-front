import React from 'react'
import ReceiptIcon from '@nanoteam/c-icons/src/ReceiptIcon'
import IconButton from '../IconButton'

const ReceiptIconButton = props => (
  <IconButton
    tooltip="Baixar recibo"
    { ...props }
  >
    <ReceiptIcon />
  </IconButton>
)
export default ReceiptIconButton
