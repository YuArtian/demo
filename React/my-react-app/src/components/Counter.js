import React, { useState } from 'react'

const Counter = () => {
  let [state, setState] = useState({ count: 0 })
  return (
    <div>
      <p>{state.count}</p>
      <button onClick={() => setState({count: state.count+1})}>+</button>

    </div>
  )
}

export default Counter