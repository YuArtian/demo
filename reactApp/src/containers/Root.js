import React, { Component }from 'react'
import { Provider } from 'react-redux'
import IndexPage from './IndexPage'

class Root extends Component{
  render(){
    const { store } = this.props
    return (
      <Provider store={store}>
        <IndexPage />
      </Provider>
    )
  }

}

export default Root