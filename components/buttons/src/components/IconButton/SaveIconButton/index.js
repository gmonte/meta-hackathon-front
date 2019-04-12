import React from 'react'
import SaveIcon from '@jqcode/c-icons/src/SaveIcon'
import IconButton from '../IconButton'

const SaveIconButton = props => (
  <IconButton
    tooltip="Salvar"
    { ...props }
  >
    <SaveIcon />
  </IconButton>
)
export default SaveIconButton
