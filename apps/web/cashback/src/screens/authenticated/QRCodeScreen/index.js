import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { inject, observer, PropTypes as MobxPropTypes } from 'mobx-react'
import flow from 'lodash/fp/flow'
import { withStores } from '@jqcode/c-stores-provider'
import authStore from '@jqcode/s-firebase/src/store/auth'
import { getQr } from '@jqcode/s-home'
import qr from '../../../assets/qr.png'

import styles from './styles'

@inject('authStore')
@observer
class SentNoteScreen extends Component {
  constructor(props) {
    super(props)
    this.getQr = this.getQr.bind(this)

    this.doingRequest = false
  }

  componentDidMount() {
    console.warn('componentDidMount', this.props.authStore.user.uid)
    if (this.props.authStore.user.uid && !this.doingRequest) {
      this.getQr()
    }
  }

  componentDidUpdate() {
    if (this.props.authStore.user.uid && !this.doingRequest) {
      this.getQr()
    }
  }

  async getQr() {
    const {
      history: {
        push
      },
      authStore: {
        user: {
          uid
        }
      }
    } = this.props
    try {
      const response = await getQr({
        uid
      })
      console.warn('response', response)
    } catch (e) {
      //
    }
  }

  render() {
    const {
      classes,
      authStore: {
        user
      }
    } = this.props

    console.warn('user', user)

    return (
      <div className={ classes.container }>
        <Typography>
          Informe o QR Code no caixa para solicitar o uso de seu crédito.
        </Typography>
        <img
          className={ classes.qr }
          src={ qr }
        />
      </div>
    )
  }
}

SentNoteScreen.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  match: PropTypes.object.isRequired,
  // eslint-disable-next-line react/require-default-props
  authStore: MobxPropTypes.objectOrObservableObject
}

export default flow(
  withStores({ authStore }),
  withStyles(styles)
)(SentNoteScreen)
