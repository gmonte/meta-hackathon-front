import React from 'react'
import UncollapseIcon from '@nanoteam/c-icons/src/UncollapseIcon'
import IconButton from '../IconButton'

const UncollapseIconbutton = props => (
  <IconButton
    tooltip="Minimizar"
    { ...props }
  >
    <UncollapseIcon />
  </IconButton>
)
export default UncollapseIconbutton
