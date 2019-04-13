import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import map from 'lodash/map'
import flow from 'lodash/fp/flow'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import QrcodeScan from 'mdi-material-ui/QrcodeScan'
import Account from 'mdi-material-ui/Account'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state'
import { withStores } from '@jqcode/c-stores-provider'
import authStore from '@jqcode/s-firebase/src/store/auth'
import { inject, observer, PropTypes as MobxPropTypes } from 'mobx-react'
import Logo from '../../assets/HavanLogo.png'

import styles from './styles'

@inject('authStore')
@observer
class AuthenticatedLayout extends Component {
  renderMoreOptions = () => {
    const { classes } = this.props

    const items = []
    items.push(popupState => (
      <MenuItem
        key="logout"
        onClick={ () => {
          this.props.authStore.signOut()
          popupState.close()
        } }
      >
        Sair
      </MenuItem>
    ))

    return (
      <PopupState variant="popover" popupId="demo-popup-menu">
        {
          popupState => (
            <Fragment>
              <IconButton
                className={ classes.menuButton }
                color="inherit"
                aria-label="Menu"
                { ...bindTrigger(popupState) }
              >
                <Account className={ classes.icons } />
              </IconButton>
              <Menu { ...bindMenu(popupState) }>
                { map(items, item => item(popupState)) }
              </Menu>
            </Fragment>
          )
        }
      </PopupState>
    )
  }

  render() {
    const {
      classes,
      children,
      history
    } = this.props

    console.warn('history', history)

    return (
      <div className={ classes.container }>
        <AppBar position="fixed">
          <Toolbar className={ classes.toolbar }>
            <IconButton
              className={ classes.menuLeft }
              color="inherit"
              aria-label="Menu"
            >
              <QrcodeScan className={ classes.icons } />
            </IconButton>
            <img
              className={ classes.logo }
              src={ Logo }
              alt="Havan"
              onClick={ () => history.push('/') }
            />
            { this.renderMoreOptions() }
          </Toolbar>
        </AppBar>

        <div className={ classes.contentContainer }>
          { children }
        </div>

        {
          history.location.pathname !== '/use'
            ? (
              <div onClick={ () => history.push('/use') }>
                <AppBar className={ classes.footer }>
                  <Toolbar color="primary">
                    <Typography align="center" className={ classes.usarMeuSaldo }>
                      Usar meu saldo
                    </Typography>
                  </Toolbar>
                </AppBar>
              </div>
            )
            : null
        }
      </div>
    )
  }
}

AuthenticatedLayout.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.element,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  // eslint-disable-next-line react/require-default-props
  authStore: MobxPropTypes.objectOrObservableObject
}
AuthenticatedLayout.defaultProps = {
  children: () => null
}

export default flow(
  withStyles(styles),
  withStores({ authStore })
)(AuthenticatedLayout)
