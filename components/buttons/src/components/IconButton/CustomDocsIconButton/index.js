import React from 'react'
import CustomDocsIcon from '@nanoteam/c-icons/src/CustomDocsIcon'
import IconButton from '../IconButton'

const CustomDocsIconButton = props => (
  <IconButton
    tooltip="Base de Conhecimento"
    { ...props }
  >
    <CustomDocsIcon />
  </IconButton>
)

export default CustomDocsIconButton
