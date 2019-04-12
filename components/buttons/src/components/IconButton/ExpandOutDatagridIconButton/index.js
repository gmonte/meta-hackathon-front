import React from 'react'
import ExpandOutDatagridIcon from '@jqcode/c-icons/src/ExpandOutDatagridIcon'
import IconButton from '../IconButton'

const ExpandOutDatagridIconButton = props => (
  <IconButton
    tooltip="Fechar linha"
    { ...props }
  >
    <ExpandOutDatagridIcon />
  </IconButton>
)
export default ExpandOutDatagridIconButton
