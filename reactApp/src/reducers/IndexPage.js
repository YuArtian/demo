
function count(state = 0,action){
  const {type, payload} = action
  switch(type) {
    case 'ADD':
      return state + payload
    default:
      return state
  }
}

export function counter (state={}, action) {
  return {
    count: count(state.count,action)
  }
}