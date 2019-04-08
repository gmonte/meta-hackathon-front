import React from 'react'
import FileTransmitIcon from '@nanoteam/c-icons/src/FileTransmitIcon'
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
