import Dashboard from '../../views/main/dashboard'
import List from '../../views/main/list'

export default [
  {
    name: '统计',
    icon: 'dashboard',
    key: 'dashboard',
    route: {
      path: '/index/dashboard',
      component: Dashboard
    }
  },
  {
    name: '核实',
    icon: 'profile',
    key: 'list',
    route: {
      path: '/index/list',
      component: List
    }
  }
]
