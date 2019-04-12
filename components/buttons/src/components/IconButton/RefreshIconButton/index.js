import React from 'react'
import PropTypes from 'prop-types'
import RefreshIcon from '@jqcode/c-icons/src/RefreshIcon'
import IconButton from '../IconButton'

const RefreshIconButton = ({ iconProps, ...props }) => (
  <IconButton
    tooltip="Atualizar"
    { ...props }
  >
    <RefreshIcon { ...iconProps } />
  </IconButton>
)

RefreshIconButton.propTypes = {
  iconProps: PropTypes.object
}

RefreshIconButton.defaultProps = {
  iconProps: {}
}

export default RefreshIconButton
