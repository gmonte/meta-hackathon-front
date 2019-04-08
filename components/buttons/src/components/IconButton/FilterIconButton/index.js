import React from 'react'
import FilterIcon from '@nanoteam/c-icons/src/FilterIcon'
import IconButton from '../IconButton'

const FilterIconButton = props => (
  <IconButton
    tooltip="Filtro avançado"
    { ...props }
  >
    <FilterIcon />
  </IconButton>
)
export default FilterIconButton
