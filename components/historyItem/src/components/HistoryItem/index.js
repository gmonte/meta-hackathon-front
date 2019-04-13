import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'
import formatMoney from '@jqcode/functions/src/formatMoney'
import moment from 'moment/moment'

import styles from './styles'

class HistoryItem extends Component {
  render() {
    const {
      classes,
      date,
      value,
      cashback
    } = this.props

    return (
      <Card className={ classes.cardContainer }>
        <Paper className={ classes.greyContainer }>
          <Typography className={ classes.dateText }>
            { moment(date, 'YYYY-MM-DD H:m:s').format('L') }
          </Typography>
          <Typography className={ classes.valueText } variant="h6">
            { formatMoney(value) }
          </Typography>
        </Paper>
        <Paper className={ classes.cashbackContainer }>
          <Typography className={ classes.cashbackText } variant="body1">
            Cashback: { formatMoney(cashback) }
          </Typography>
        </Paper>
      </Card>
    )
  }
}

HistoryItem.propTypes = {
  classes: PropTypes.object.isRequired,
  date: PropTypes.string,
  value: PropTypes.number,
  cashback: PropTypes.number
}

HistoryItem.defaultProps = {
  date: false,
  value: 0,
  cashback: 0
}

export default withStyles(styles)(HistoryItem)
