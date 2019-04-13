import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import CardMedia from '@material-ui/core/CardMedia'
import Card from '@material-ui/core/Card'
import HelpIconButton from '@jqcode/c-buttons/src/components/IconButton/HelpIconButton'
import CloseIconButton from '@jqcode/c-buttons/src/components/IconButton/CloseIconButton'
import logo from '../../assets/logo.png'
import logoMobile from '../../assets/logoMobile.png'
import styles from './styles'

class GuestLayout extends PureComponent {
  render() {
    const {
      children,
      classes
    } = this.props

    return (
      <Grid
        container
        wrap="wrap"
      >
        <Grid
          item
          xm={ 12 }
          sm={ 12 }
          md={ 12 }
          lg={ 12 }
          className={ classes.container }
        >
          <Card className={ classes.header }>
            <HelpIconButton />
            {/*<CardMedia*/}
            {/*  className={ classes.logo }*/}
            {/*  image={ logo }*/}
            {/*  title="Havan"*/}
            {/*/>*/}
            <CloseIconButton />
          </Card>
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
