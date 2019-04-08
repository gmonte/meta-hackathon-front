import React, { Component } from 'react'
// import PropTypes from 'prop-types'

class NotFoundScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div>
        <h2>Erro 404: Não encontramos essa página :(</h2>
        <p>A página não existe ou foi removida do sistema.</p>
      </div>
    )
  }
}

NotFoundScreen.propTypes = {
}

export default NotFoundScreen
