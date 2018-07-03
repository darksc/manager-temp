/**
 * author     dark
 * date       18/6/28
 */

import React, { Component } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import routerConfig from "./config"

import AuthRouter from '../authRouter'

let routers = routerConfig.filter(r => r.dom === true)

class MainRouter extends Component {

  state = {
    routers: routers
  }

  render () {
    return (
      <div className="main-module">
        <Switch>
          {this.state.routers.map((route, i) => <Route key={i} {...route.route} />)}
          <AuthRouter path="/index/set" />
          <Route component={routerConfig[0].route.component} />
        </Switch>
      </div>
    )
  }
}

export default withRouter(MainRouter)
