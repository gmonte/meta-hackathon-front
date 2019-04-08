import React from 'react'
import ExpandOutDatagridIcon from '@nanoteam/c-icons/src/ExpandOutDatagridIcon'
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
