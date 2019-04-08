import React from 'react'
import CloudDownloadIcon from '@nanoteam/c-icons/src/CloudDownloadIcon'
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
