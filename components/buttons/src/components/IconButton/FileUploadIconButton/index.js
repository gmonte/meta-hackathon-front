import React from 'react'
import FileUploadIcon from '@nanoteam/c-icons/src/FileUploadIcon'
import IconButton from '../IconButton'

const FileUploadIconButton = props => (
  <IconButton
    tooltip="Gerar arquivo"
    asCreate
    { ...props }
  >
    <FileUploadIcon />
  </IconButton>
)
export default FileUploadIconButton
