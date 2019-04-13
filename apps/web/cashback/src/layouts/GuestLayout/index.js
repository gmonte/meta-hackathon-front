import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import CardMedia from '@material-ui/core/CardMedia'
import Card from '@material-ui/core/Card'
import HelpIconButton from '@jqcode/c-buttons/src/components/IconButton/HelpIconButton'
import CloseIconButton from '@jqcode/c-buttons/src/components/IconButton/CloseIconButton'
import {Logo} from '../../assets/logo.png'
import LogoMobile from '../../assets/logoMobile.png'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import CashIcon from '@jqcode/c-icons/src/CashIcon'


import styles from './styles'

class GuestLayout extends PureComponent {
  state = {
    value: 0
  }

  handleChange = (event, value) => {
    this.setState({ value })
  }

  render() {
    const {
      children,
      classes
    } = this.props

    const {
      value
    } = this.state

    return (
      <Grid
        container
      >
        <Grid
          item
          xm={ 12 }
          sm={ 12 }
          md={ 12 }
          lg={ 12 }
          className={ classes.container }
        >
          <AppBar position="static" color="default" className={ classes.header }>
            <Toolbar>

            </Toolbar>
          </AppBar>
          <Card className={ classes.content }>
            { children }
          </Card>
        </Grid>

      </Grid>
    )
  }
}

GuestLayout.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.element.isRequired,
  auth: PropTypes.object
}
GuestLayout.defaultProps = {
  auth: {}
}

export default withStyles(styles)(GuestLayout)
