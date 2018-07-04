import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Layout, Menu, Icon } from 'antd'
import day from 'dayjs'
import dayLocale from 'dayjs/locale/zh-cn'

import MainRouter from '../../routers/mainRouter/'
import mainRouterConfig from '../../routers/mainRouter/config'

import './index.scss'

day.locale('zh-cn', dayLocale)

const {Header, Sider, Content} = Layout

const filterPath = (path) => {
  let obj = mainRouterConfig.filter(v => {
    return v.route.path === path
  })
  return obj.length > 0 ? obj[0] : null
}

class Main extends Component {

  constructor (props) {
    super(props)

    let location = this.props.location
    let current = filterPath(location.pathname)

    this.state = {
      user: 'admin',
      collapsed: false,
      currentSelect: current || mainRouterConfig[0]
    }

  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }

  menuOnClick = ({item, key, keyPath}) => {
    if (this.state.currentSelect.route.path === key) return
    let current = filterPath(key)
    this.props.history.push(current.route.path)
    this.setState({currentSelect: current})
  }

  render () {

    let title = null
    if (!this.state.collapsed) {
      title = <span className="main-title">管理系统模板</span>
    } else {
      title = null
    }

    const menu = mainRouterConfig.map((v) => {
      return (
        <Menu.Item key={v.route.path}>
          <Icon type={v.icon}/>
          <span>{v.name}</span>
        </Menu.Item>
      )
    })

    return (
      <div className="main-wrap">
        <Layout>
          <Sider className="main-sider"
                 width={210}
                 trigger={null}
                 collapsible
                 collapsed={this.state.collapsed}
          >
            <div className="main-logo">
              {title}
              <Icon className="main-trigger"
                    type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                    onClick={this.toggle}/>
            </div>
            <Menu theme="dark"
                  mode="inline"
                  defaultSelectedKeys={[this.state.currentSelect.route.path]}
                  onClick={this.menuOnClick}
            >
              {menu}
            </Menu>
          </Sider>

          <Layout className="main-right">
            <Header className="main-header">
              <ul className="main-header-tools">
                <li>{day(new Date()).format('YYYY-MM-DD dddd')}</li>
                <li>{this.state.user}</li>
                <li>
                  <Icon type="logout" />
                </li>
              </ul>
            </Header>
            <Content className="main-content">
              <MainRouter/>
            </Content>
          </Layout>
        </Layout>
      </div>
    )
  }
}

export default withRouter(Main)
