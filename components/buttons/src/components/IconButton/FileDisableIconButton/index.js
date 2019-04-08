import React from 'react'
import FileDisableIcon from '@nanoteam/c-icons/src/FileDisableIcon'
import IconButton from '../IconButton'

const FileDisableIconButton = props => (
  <IconButton
    tooltip="Desconsiderar arquivos"
    asCreate
    { ...props }
  >
    <FileDisableIcon />
  </IconButton>
)
export default FileDisableIconButton
