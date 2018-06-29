const ADD_COUNT = 'ADD_COUNT'
const SUB_COUNT = 'SUB_COUNT'

export function addCount (text) {
  return {
    type: ADD_COUNT,
    text: text
  }
}

export function subCount (text) {
  return {
    type: SUB_COUNT,
    text: text
  }
}
