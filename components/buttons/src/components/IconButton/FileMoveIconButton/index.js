import React from 'react'
import FileMoveIcon from '@nanoteam/c-icons/src/FileMoveIcon'
import IconButton from '../IconButton'

const FileMoveIconButton = props => (
  <IconButton
    tooltip="Gerar arquivos"
    asCreate
    { ...props }
  >
    <FileMoveIcon />
  </IconButton>
)
export default FileMoveIconButton
