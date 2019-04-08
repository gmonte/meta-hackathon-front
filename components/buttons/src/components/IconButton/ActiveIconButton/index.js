import React from 'react'
import PropTypes from 'prop-types'
import ActiveIcon from '@nanoteam/c-icons/src/ActiveIcon'
import IconButton from '../IconButton'

const ActiveIconButton = props => (
  <IconButton
    tooltip="Ativo"
    { ...props }
  >
    <ActiveIcon />
  </IconButton>
)

ActiveIconButton.propTypes = {
  iconProps: PropTypes.object
}
ActiveIconButton.defaultProps = {
  iconProps: {}
}

export default ActiveIconButton
