/**
 * author     dark
 * date       18/6/28
 */

import React, { Component } from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import routerConfig from "./config"

class AppRouter extends Component {



  render () {
    return (
      <div className="app-module">
        <Router>
          <div className="body-content">
            {routerConfig.map((route, i) => <Route key={i} {...route.route} />)}
          </div>
        </Router>
      </div>
    )
  }
}

export default AppRouter
