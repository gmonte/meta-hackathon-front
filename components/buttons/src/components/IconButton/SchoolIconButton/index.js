import React from 'react'
import SchoolIcon from '@jqcode/c-icons/src/SchoolIcon'
import IconButton from '../IconButton'

const SchoolIconButton = props => (
  <IconButton
    tooltip="Resumo da Rotina"
    color="primary"
    { ...props }
  >
    <SchoolIcon />
  </IconButton>
)

export default SchoolIconButton
