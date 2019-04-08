import React from 'react'
import FileDownloadIcon from '@nanoteam/c-icons/src/FileDownloadIcon'
import IconButton from '../IconButton'

const FileDownloadIconButton = props => (
  <IconButton
    tooltip="Baixar arquivo"
    asCreate
    { ...props }
  >
    <FileDownloadIcon />
  </IconButton>
)
export default FileDownloadIconButton
