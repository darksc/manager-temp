/**
 * author     dark
 * date       18/7/6
 */

import axios from 'axios'

const defaults = {
  baseURL: 'https://www.easy-mock.com/mock/5937522591470c0ac106a9f1',
  headers: {
    post: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }
}

Object.assign(axios.defaults, defaults)

export const getShops = params => {
  return axios({
    method: 'get',
    url: '/mus/shops',
    params: params
  })
}
