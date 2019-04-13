import React, { Component } from 'react'
import PropTypes from 'prop-types'
import map from 'lodash/map'
import isEmpty from 'lodash/isEmpty'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'
import formatMoney from '@jqcode/functions/src/formatMoney'
import { getHome } from '@jqcode/s-home'
import authStore from '@jqcode/s-firebase/src/store/auth'
import flow from 'lodash/fp/flow'
import { inject, observer, PropTypes as MobxPropTypes } from 'mobx-react'
import { withStores } from '@jqcode/c-stores-provider'

import styles from './styles'
import HistoryItem from '@jqcode/c-history-item/src/components/HistoryItem'

@inject('authStore')
@observer
class InitialScreen extends Component {
  constructor(props) {
    super(props)
    this.getItems = this.getItems.bind(this)

    this.state = {
      items: []
    }

    this.doingRequest = false
  }

  componentDidMount() {
    console.warn('componentDidMount', this.props.authStore.user.uid)
    if (this.props.authStore.user.uid && !this.doingRequest) {
      this.getItems()
    }
  }

  componentDidUpdate() {
    if (this.props.authStore.user.uid && !this.doingRequest) {
      this.getItems()
    }
  }

  async getItems() {
    this.doingRequest = true
    const {
      authStore: {
        user: {
          uid
        }
      }
    } = this.props
    try {
      const {
        body: {
          data: {
            history
          }
        }
      } = await getHome({ uid })
      this.setState(prevState => ({
        ...prevState,
        items: map(history, item => ({
          date: item.created_at,
          value: item.total_value,
          cashback: item.credits_gained
        }))
      }))
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

    const { items } = this.state

    const myItems = map(items, (item, index) => <HistoryItem key={ index } { ...item } />)

    console.warn(user)

    return (
      <div>
        <Card className={ classes.saldoContainer }>
          <Typography className={ classes.saldoText }>
            Seu saldo
          </Typography>
          <Typography className={ classes.saldoText } variant="h6">
            { formatMoney('0') }
          </Typography>
        </Card>

        {
          isEmpty(myItems)
            ? <Typography align="center">Nenhuma compra encontrada no sistema.</Typography>
            : myItems
        }
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
  withStores({ authStore }),
  withStyles(styles)
)(InitialScreen)
