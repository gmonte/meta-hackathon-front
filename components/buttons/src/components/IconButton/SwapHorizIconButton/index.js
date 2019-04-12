import React from 'react'
import SwapHorizIcon from '@jqcode/c-icons/src/SwapHorizIcon'
import IconButton from '../IconButton'

const SwapHorizIconButton = props => (
  <IconButton
    tooltip="Encaminhar"
    { ...props }
  >
    <SwapHorizIcon />
  </IconButton>
)
export default SwapHorizIconButton
