import React, { Component } from 'react'
// import PropTypes from 'prop-types'

import { Form, Input, Button, Cascader, Icon, Divider, Tooltip } from 'antd';

import './index.scss'

const FormItem = Form.Item;

class index extends Component {

  static propTypes = {}

  state = {
    options: [{
      value: 'zhejiang',
      label: 'Zhejiang',
      children: [{
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [{
          value: 'xihu',
          label: 'West Lake',
        }],
      }],
    }, {
      value: 'jiangsu',
      label: 'Jiangsu',
      children: [{
        value: 'nanjing',
        label: 'Nanjing',
        children: [{
          value: 'zhonghuamen',
          label: 'Zhong Hua Men',
        }],
      }],
    }]
  }

  handleSubmit = (e) => {
  }

  onChange = () => {
  }

  render () {

    return (
      <div className="s-table-tools-wrap">
        <div className="table-search">
          <Form layout="inline" onSubmit={this.handleSubmit}>
            <FormItem>
              <Cascader options={this.state.options} onChange={this.onChange} placeholder="行政区划"/>
            </FormItem>
            <FormItem>
              <Input placeholder="收费站名称"/>
            </FormItem>
            <FormItem>
              <Button onClick={e => this.handleSubmit(e)}>查询</Button>
            </FormItem>
          </Form>
        </div>

        <div className="table-btn">
          <Tooltip placement="bottom" title="删除">
            <Icon type="delete"/>
          </Tooltip>
          <Divider type="vertical"/>
          <Tooltip placement="bottom" title="确认">
            <Icon type="check-circle-o"/>
          </Tooltip>
          <Divider type="vertical"/>
          <Tooltip placement="bottom" title="取消">
            <Icon type="close-circle-o"/>
          </Tooltip>
          <div className="switch-btn">
            <span>地图</span>
          </div>
        </div>
      </div>
    )
  }
}

const TableTools = Form.create()(index);

export default TableTools
