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
    const newArray = array.map((element) => {
      return element.sub_topic
    })
    const removedUndefined = newArray.filter((element) => {
      return element
    })
    const filteredArray = removedUndefined.filter((element, index, array) => {
        return array.findIndex(i => i === element) === index;
      });
    const sortedArray = filteredArray.sort()
    return sortedArray
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
