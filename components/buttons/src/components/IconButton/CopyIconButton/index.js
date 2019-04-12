import React from 'react'
import CopyIcon from '@jqcode/c-icons/src/CopyIcon'
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
