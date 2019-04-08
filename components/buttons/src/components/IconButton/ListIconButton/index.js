import React from 'react'
import ListIcon from '@nanoteam/c-icons/src/ListIcon'
import IconButton from '../IconButton'

const ListIconButton = props => (
  <IconButton
    tooltip="Listagem"
    color="secondary"
    { ...props }
  >
    <ListIcon />
  </IconButton>
)
export default ListIconButton
