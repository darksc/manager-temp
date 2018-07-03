import React, { Component } from 'react'
import Bundle from '../../../lib/Bundle'

export default class Admin extends Component {

  render () {
    return (
      <Bundle load={() => import('./Admin')}>
        {(Admin) => <Admin {...this.props}/>}
      </Bundle>
    )
  }

}
