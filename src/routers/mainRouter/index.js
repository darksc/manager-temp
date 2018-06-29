/**
 * author     dark
 * date       18/6/28
 */

import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import routerConfig from "./config"

class AppRouter extends Component {

  render () {
    return (
      <div className="main-module">
        {routerConfig.map((route, i) => <Route key={i} {...route.route} />)}
      </div>
    )
  }
}

export default AppRouter
