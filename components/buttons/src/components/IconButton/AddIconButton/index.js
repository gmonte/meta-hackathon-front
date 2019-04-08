import React from 'react'
import PropTypes from 'prop-types'
import AddIcon from '@nanoteam/c-icons/src/AddIcon'
import IconButton from '../IconButton'

const Index = props => (
  <IconButton
    tooltip="Criar novo registro"
    asCreate
    { ...props }
  >
    <AddIcon />
  </IconButton>
)
Index.propTypes = {
  iconProps: PropTypes.object
}
Index.defaultProps = {
  iconProps: {}
}

export default Index
