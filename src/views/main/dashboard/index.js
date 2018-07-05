import React, { Component } from 'react'
import Bundle from '../../../libs/bundle'
import './index.scss'

export default class Dashboard extends Component {

  render () {
    return (
      <Bundle load={() => import('./Dashboard')}>
        {(Dashboard) => <Dashboard {...this.props}/>}
      </Bundle>
    )
  }

}
