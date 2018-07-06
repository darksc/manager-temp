import React, { Component } from 'react'

import Button from '../../../components/Button'
import Tab from '../../../components/Tab'

export default class List extends Component {

  state = {
    tabs: [
      {
        code: '0',
        label: '全部'
      },
      {
        code: '1',
        label: '已确认'
      },
      {
        code: '2',
        label: '未确认'
      }
    ],
    current: {
      code: '0',
      label: '全部'
    }
  }

  handleClick = item => {
      this.setState({current: item})
  }

  render () {
    return (
      <div className="list-wrap fix-overflow">
        <div className="main-header-tabs">
          <Tab tabs={this.state.tabs} current={this.state.current} onClick={this.handleClick}/>
        </div>

        <div className="list-content">
          <Button/>
        </div>
      </div>
    )
  }
}
