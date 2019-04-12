import React from 'react'
import DeleteCircleIcon from '@jqcode/c-icons/src/DeleteCircleIcon'
import IconButton from '../IconButton'

const DeleteCircleIconButton = props => (
  <IconButton
    color="secondary"
    tooltip="Remover"
    { ...props }
  >
    <DeleteCircleIcon />
  </IconButton>
)
export default DeleteCircleIconButton
