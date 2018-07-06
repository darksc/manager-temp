import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './index.scss'

export default class index extends Component {

  static propTypes = {
    tabs: PropTypes.array.isRequired,        // 标签卡数组
    current: PropTypes.object.isRequired,    // 默认选中
    onClick: PropTypes.func.isRequired       // 点击事件
  }

  state = {
    current: this.props.current
  }

  handleClick = (item) => {
    this.setState({current: item})
    this.props.onClick(item)
  }

  render () {
    return (
      <div className="s-tab-wrap">
        <ul>
          {this.props.tabs.map((item, index) =>
            <li key={item.code}>
              <span className={this.state.current.code === item.code ? 'selected' : ''}
                    onClick={(e) => this.handleClick(item)}>{item.label}</span>
            </li>
          )}
        </ul>
      </div>
    )
  }
}
