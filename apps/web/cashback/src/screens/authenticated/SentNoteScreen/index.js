import React, { Component } from 'react'
import PropTypes from 'prop-types'
import get from 'lodash/get'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import CircularIndeterminate from '@jqcode/c-loaders/src/components/CircularIndeterminate'
import { sentNote } from '@jqcode/s-sent-note'
import { matchPath } from 'react-router'
import { inject, observer, PropTypes as MobxPropTypes } from 'mobx-react'
import flow from 'lodash/fp/flow'
import { withStores } from '@jqcode/c-stores-provider'
import authStore from '@jqcode/s-firebase/src/store/auth'

import styles from './styles'

@inject('authStore')
@observer
class SentNoteScreen extends Component {
  constructor(props) {
    super(props)
    this.sentNote = this.sentNote.bind(this)

    this.doingRequest = false
  }

  componentDidMount() {
    console.warn('componentDidMount', this.props.authStore.user.uid)
    if (this.props.authStore.user.uid && !this.doingRequest) {
      this.sentNote()
    }
  }

  componentDidUpdate() {
    console.warn('aqui caralho', this.props.authStore.user.uid)
    if (this.props.authStore.user.uid && !this.doingRequest) {
      this.sentNote()
    }
  }

  async sentNote() {
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
    const match = matchPath(get(this.props, 'history.location.pathname'), {
      path: '/sent-note/:noteId',
      exact: true,
      strict: false
    })

    const {
      noteId
    } = match.params

    try {
      await sentNote({
        noteIdentifier: noteId,
        uid
      })
    } catch (e) {
      //
    }

    push('/')
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
          Aguarde um momento... estamos processando a operação.
        </Typography>
        <CircularIndeterminate />
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
