import React, { Component } from 'react'
import Bundle from '../../../lib/bundle'

export default class Admin extends Component {

  render () {
    return (
      <Bundle load={() => import('./Guest')}>
        {(Guest) => <Guest {...this.props}/>}
      </Bundle>
    )
  }

}
