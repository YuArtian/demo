/**
 * Licensed Materials - Property of tenxcloud.com
 * (C) Copyright 2017 TenxCloud. All Rights Reserved.
 *
 *
 *
 * v0.1 - 2017/4/3
 * @author ZhaoXueYu
 */
import React, { Component, PropTypes } from 'react'

class Counter extends Component {
  static propTypes = {
    value: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired
  }
  render() {
    const {value, onIncrement, onDecrement} = this.props
    return (
      <div>
        Clicked: { value } times
        {' '}
        <button onClick={ onIncrement }>
          +
        </button>
        {' '}
        <button onClick={ onDecrement }>
          -
        </button>
        {' '}
      </div>
    )
  }
}

export default Counter