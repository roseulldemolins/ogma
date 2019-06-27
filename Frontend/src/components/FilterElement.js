import React, { Component } from 'react'

class FilterElement extends Component{
  constructor(props){
    super(props)
    this.state = {
      tickBox: 'x'
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    console.log('handleClick');
    if(this.state.tickBox === 'x'){
      console.log('if condition met');
      this.setState({tickBox: '√'})
    } else{
      console.log('condition not met');
      this.setState({tickBox: 'x'})
    }
  }

  render() {
    return(
      <div>
      <div onClick= {this.handleClick}>{this.props.option}</div>
      <div onClick= {this.handleClick}>{this.state.tickBox}</div>
      </div>
    )
  }
}

export default FilterElement
