import React from 'react'
import EditIcon from '@nanoteam/c-icons/src/EditIcon'
import IconButton from '../IconButton'

const EditIconButton = props => (
  <IconButton
    tooltip="Editar"
    { ...props }
  >
    <EditIcon />
  </IconButton>
)
export default EditIconButton
