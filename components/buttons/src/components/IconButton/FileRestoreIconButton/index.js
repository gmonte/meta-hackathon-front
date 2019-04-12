import React from 'react'
import FileRestoreIcon from '@jqcode/c-icons/src/FileRestoreIcon'
import IconButton from '../IconButton'

const FileRestoreIconButton = props => (
  <IconButton
    tooltip="Regerar arquivo"
    asCreate
    { ...props }
  >
    <FileRestoreIcon />
  </IconButton>
)
export default FileRestoreIconButton
