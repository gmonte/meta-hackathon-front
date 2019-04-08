import React from 'react'
import DeleteIcon from '@nanoteam/c-icons/src/DeleteIcon'
import IconButton from '../IconButton'

const DeleteIconButton = props => (
  <IconButton
    color="secondary"
    tooltip="Excluir"
    { ...props }
  >
    <DeleteIcon />
  </IconButton>
)
export default DeleteIconButton
