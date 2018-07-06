import React, { Component } from 'react'

import './index.scss'

export default class index extends Component {

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
