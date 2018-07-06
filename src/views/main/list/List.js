import React, { Component } from 'react'

import Tab from '../../../components/Tab'

import { Table, Divider } from 'antd'


import { getShops } from '../../../services'

export default class List extends Component {

  componentWillMount () {
    this.getShops()
  }

  componentDidMount () {
    this.setState({
      y: $('.main-content-table').height() - 94
    })
  }

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
    },
    data: [],
    loading: false,
    y: 0
  }

  getShops = () => {
    this.setState({loading: true})
    getShops().then(res => {
      this.setState({data: res.data.data})
      this.setState({loading: false})
    }).catch(e => {
      this.setState({loading: false})
    })
  }

  handleClick = item => {
    this.setState({current: item})
  }

  columns = [{
    title: '序号',
    render: (text, record, index) => index + 1,
    width: 45,
    align: 'center'
  }, {
    title: '操作',
    render: (text, record, index) => (
      <div className="table-btn-wrap">
        <span>删除</span>
        <Divider type="vertical"/>
        <span>确认</span>
        <Divider type="vertical"/>
        <span>取消</span>
    </div>
    ),
    width: 150,
    align: 'center'
  }, {
    title: '名称',
    dataIndex: 'name',
    width: 150
  }, {
    title: '电话',
    dataIndex: 'phone',
    width: 150
  }, {
    title: '价格',
    dataIndex: 'price',
    render: text => '$ ' + text,
    width: 150
  }, {
    title: '距离',
    dataIndex: 'distance',
    render: text => text + ' km',
    width: 150
  }, {
    title: '地址',
    dataIndex: 'address'
  }]

  rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    }
  }

  render () {
    return (
      <div className="list-wrap fix-overflow">
        <div className="main-header-tabs">
          <Tab tabs={this.state.tabs} current={this.state.current} onClick={this.handleClick}/>
        </div>

        <div className="list-content">
          <div className="main-content-form">

          </div>
          <div className="main-content-table">
            <Table
              size="small"
              rowSelection={this.rowSelection}
              columns={this.columns}
              dataSource={this.state.data}
              rowKey="id"
              loading={this.state.loading}
              pagination={{ pageSize: 50, total: 1000 }}
              scroll={{ y: this.state.y }}/>
          </div>
        </div>
      </div>
    )
  }
}
