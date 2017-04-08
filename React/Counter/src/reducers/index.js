/**
 * Licensed Materials - Property of tenxcloud.com
 * (C) Copyright 2017 TenxCloud. All Rights Reserved.
 *
 *
 *
 * v0.1 - 2017/4/3
 * @author ZhaoXueYu
 */
export default (state = 0, action) => {
  console.log('reduce')
  switch (action.type) {
    case 'INCREMENT':
      console.log('state',state)
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}