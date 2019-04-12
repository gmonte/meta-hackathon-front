import React from 'react'
import ExpandInDatagridIcon from '@jqcode/c-icons/src/ExpandInDatagridIcon'
import IconButton from '../IconButton'

const ExpandInDatagridIconButton = props => (
  <IconButton
    tooltip="Expandir linha"
    { ...props }
  >
    <ExpandInDatagridIcon />
  </IconButton>
)
export default ExpandInDatagridIconButton
