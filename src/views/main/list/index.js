import React, { Component } from 'react'
import Bundle from '../../../lib/Bundle'

export default class List extends Component {

  render () {
    return (
      <Bundle load={() => import('./List')}>
        {(List) => <List {...this.props}/>}
      </Bundle>
    )
  }
}
