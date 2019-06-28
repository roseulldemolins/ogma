import React, { Component } from 'react'

class FilterElement extends Component{
  constructor(props){
    super(props)
    this.state = {
      tickBox: this.determineCheck()
    }

    this.handleClick = this.handleClick.bind(this)
  }

  componentDidUpdate(prevProps) {
    if(this.props.tickedArray !== prevProps.tickedArray)
    this.setState({
      tickBox: this.determineCheck()
    })
  }

  determineCheck() {
    if(this.props.tickedArray[this.props.index]){
      return '√'
    } return 'x'
  }

  handleClick(){
    if(this.state.tickBox === 'x'){
      this.setState({tickBox: '√'})
    } else{
      this.setState({tickBox: 'x'})
    }
    this.props.handleCheck(this.props.index)
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
