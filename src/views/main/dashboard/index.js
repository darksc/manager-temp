import React, { Component } from 'react'
import Bundle from '../../../lib/Bundle'

export default class Dashboard extends Component {

  render () {
    return (
      <Bundle load={() => import('./Dashboard')}>
        {(Dashboard) => <Dashboard {...this.props}/>}
      </Bundle>
    )
  }

}
