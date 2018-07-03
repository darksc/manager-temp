/**
 * author     dark
 * date       18/6/28
 */

import React, { Component } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import routerConfig from "./config"

class MainRouter extends Component {

  render () {
    return (
      <div className="main-module">
        <Switch>
            {routerConfig.map((route, i) => <Route key={i} {...route.route} />)}
            <Route component={routerConfig[0].route.component} />
        </Switch>
      </div>
    )
  }
}

export default withRouter(MainRouter)
