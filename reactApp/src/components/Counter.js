import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addCount } from '../actions/IndexPage'

class Counter extends Component {
  constructor(props){
    super(props)
    this.handleAdd=this.handleAdd.bind(this)
  }
  handleAdd(){
    this.props.addCount(2)
  }
  render(){
    const num = 2
    return (
      <button onClick={this.handleAdd}>add {this.props.count} </button>
    )
  }
}

function mapStateToProps (state, ownProps) {
  const { counter } = state
  return {
    count:counter.count
  }
}

export default connect(mapStateToProps,{
  addCount,
})(Counter)