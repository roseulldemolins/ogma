import React, { Component } from 'react'

class SubjectFilter extends Component {
  constructor(props){
    super(props)
    this.state = {
      questions: this.filterTopics(this.props.questions),
    }

    this.display = this.display.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  filterTopics(array){
    console.log(array);
    return array
  }

  componentDidUpdate(prevProps) {
    if(this.props.questions !== prevProps.questions)
    this.setState({
      questions: this.filterTopics(this.props.questions)
    })
  }

  handleClick(){

  }

  display(){
    if(!this.questions) {
      return <button onClick={this.handleClick}>Subjects</button>
    }
  }

  render(){
    return(
      <div>
        {this.display()}
      </div>
    )
  }
}

export default SubjectFilter
