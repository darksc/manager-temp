import Main from '../../views/main/'

export default [
  {
    name: '首页',
    key: '/',
    route: {
      exact: true,
      path: '/',
      component: Main
    }
  },
  {
    name: '首页',
    key: 'index',
    route: {
      path: '/index',
      component: Main
    }
  }
]
