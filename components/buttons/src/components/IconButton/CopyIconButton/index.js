import React from 'react'
import CopyIcon from '@nanoteam/c-icons/src/CopyIcon'
import IconButton from '../IconButton'

const CopyIconButton = props => (
  <IconButton
    tooltip="Copiar"
    { ...props }
  >
    <CopyIcon />
  </IconButton>
)
export default CopyIconButton
