import React from 'react'
import ArchiveIcon from '@jqcode/c-icons/src/ArchiveIcon'
import IconButton from '../IconButton'

const ArchiveIconButton = props => (
  <IconButton
    tooltip="Arquivar"
    { ...props }
  >
    <ArchiveIcon />
  </IconButton>
)
export default ArchiveIconButton
