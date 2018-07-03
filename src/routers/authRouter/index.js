/**
 * author     dark
 * date       18/6/28
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Route, withRouter } from 'react-router-dom'
import Admin from '../../views/main/admin'
import Guest from '../../views/main/guest'

class AuthRouter extends Component {

  static propTypes = {
    path: PropTypes.string.isRequired
  }

  state = {
    user: 'admin'
  }

  render () {
    return (
      <Route
        path={this.props.path}
        render={props => this.state.user === 'admin' ? (<Admin {...props} />) : (<Guest {...props} />)}
      />
    )
  }
}

export default withRouter(AuthRouter)
