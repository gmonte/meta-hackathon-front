import React from 'react'
import CloudDownloadIcon from '@jqcode/c-icons/src/CloudDownloadIcon'
import IconButton from '../IconButton'

const CloudDownloadIconButton = props => (
  <IconButton
    tooltip="Buscar"
    { ...props }
  >
    <CloudDownloadIcon />
  </IconButton>
)
export default CloudDownloadIconButton
