import React from 'react'
import UnselectedIcon from '@jqcode/c-icons/src/UnselectedIcon'
import IconButton from '../IconButton'

const UnselectedIconButton = props => (
  <IconButton
    tooltip="Desmarcar"
    { ...props }
  >
    <UnselectedIcon />
  </IconButton>
)
export default UnselectedIconButton
