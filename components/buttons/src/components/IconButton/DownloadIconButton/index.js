import React from 'react'
import DownloadIcon from '@jqcode/c-icons/src/DownloadIcon'
import IconButton from '../IconButton'

const DownloadIconButton = props => (
  <IconButton
    tooltip="Download"
    { ...props }
  >
    <DownloadIcon />
  </IconButton>
)
export default DownloadIconButton
