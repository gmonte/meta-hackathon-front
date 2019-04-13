import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Logo from '../../assets/HavanLogo.png'

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
      classes,
      history
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
            <Toolbar className={ classes.toolbarContainer }>
              <img
                className={ classes.logo }
                src={ Logo }
                alt="Havan"
                onClick={ () => history.push('/') }
              />
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
