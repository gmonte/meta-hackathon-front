import React from 'react'
import DuplicateIcon from '@jqcode/c-icons/src/DuplicateIcon'
import IconButton from '../IconButton'

const DuplicateIconButton = props => (
  <IconButton
    tooltip="Duplicar"
    { ...props }
  >
    <DuplicateIcon />
  </IconButton>
)
export default DuplicateIconButton
