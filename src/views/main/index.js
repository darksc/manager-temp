import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Layout, Menu, Icon } from 'antd'
import moment from 'moment'
import momentLocale from 'moment/locale/zh-cn'

import MainRouter from '../../routers/mainRouter/'
import mainRouterConfig from '../../routers/mainRouter/config'

import './index.scss'

moment.updateLocale('zh-cn', momentLocale)

const {Header, Sider, Content} = Layout

class Main extends Component {

  componentDidMount () {
    this.props.history.push(mainRouterConfig[0].route.path)
  }

  state = {
    user: 'admin',
    collapsed: false,
    currentSelect: mainRouterConfig[0].key
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }

  menuOnClick = ({item, key, keyPath}) => {
    if (this.state.currentSelect === key) return

    let current = mainRouterConfig.filter(v => {
      return v.key === key
    })

    this.props.history.push(current[0].route.path)
    this.setState({currentSelect: key})
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
        <Menu.Item key={v.key}>
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
                  defaultSelectedKeys={[this.state.currentSelect]}
                  onClick={this.menuOnClick}
            >
              {menu}
            </Menu>
          </Sider>

          <Layout className="main-right">
            <Header className="main-header">
              <ul className="main-header-tools">
                <li>{moment(new Date()).format('YYYY-MM-DD dddd')}</li>
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
