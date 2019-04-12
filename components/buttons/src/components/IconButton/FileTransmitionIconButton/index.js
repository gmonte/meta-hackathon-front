import React from 'react'
import FileTransmitIcon from '@jqcode/c-icons/src/FileTransmitIcon'
import IconButton from '../IconButton'

const FileTransmitionIconButton = props => (
  <IconButton
    tooltip="Transmitir arquivo"
    asCreate
    { ...props }
  >
    <FileTransmitIcon />
  </IconButton>
)
export default FileTransmitionIconButton
