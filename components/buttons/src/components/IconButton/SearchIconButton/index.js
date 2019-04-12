import React from 'react'
import SearchIcon from '@jqcode/c-icons/src/SearchIcon'
import IconButton from '../IconButton'

const SearchIconButton = props => (
  <IconButton
    tooltip="Pesquisar"
    color="primary"
    { ...props }
  >
    <SearchIcon />
  </IconButton>
)

export default SearchIconButton
