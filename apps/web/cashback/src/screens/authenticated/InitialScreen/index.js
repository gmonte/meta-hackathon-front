import React, { Component } from 'react'
import PropTypes from 'prop-types'
import flow from 'lodash/fp/flow'
import { withStyles } from '@material-ui/core/styles'
import Button from '@jqcode/c-buttons/src/components/Button'
import { withStores } from '@jqcode/c-stores-provider'
import authStore from '@jqcode/s-firebase/src/store/auth'
import { inject, observer, PropTypes as MobxPropTypes } from 'mobx-react'

import styles from './styles'

@inject('authStore')
@observer
class InitialScreen extends Component {
  render() {
    const {
      authStore: {
        signOut
      }
    } = this.props

    return (
      <div>
        <h2>Initial authenticated screen</h2>
        <Button onClick={ signOut }>
          Logout
        </Button>
      </div>
    )
  }
}

InitialScreen.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  // eslint-disable-next-line react/require-default-props
  authStore: MobxPropTypes.objectOrObservableObject
}

export default flow(
  withStyles(styles),
  withStores({ authStore })
)(InitialScreen)
