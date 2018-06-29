const count = (state = 10, action) => {
  switch (action.type) {
    case 'ADD_COUNT':
      return state + action.text
    case 'SUB_COUNT':
      return state - 1
    default:
      return state
  }
}
export default count
