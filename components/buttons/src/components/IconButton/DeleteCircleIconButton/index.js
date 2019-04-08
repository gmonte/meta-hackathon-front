import React from 'react'
import DeleteCircleIcon from '@nanoteam/c-icons/src/DeleteCircleIcon'
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
