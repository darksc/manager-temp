import Dashboard from '../../views/main/dashboard'
import List from '../../views/main/list'

export default [
  {
    name: '统计',
    icon: 'dashboard',
    key: 'dashboard',
    dom: true,
    route: {
      path: '/index/dashboard',
      component: Dashboard
    }
  },
  {
    name: '核实',
    icon: 'profile',
    key: 'list',
    dom: true,
    route: {
      path: '/index/list',
      component: List
    }
  },
  {
    name: '设置',
    icon: 'profile',
    key: 'list',
    dom: false,
    route: {
      path: '/index/set',
      component: List
    }
  }
]
