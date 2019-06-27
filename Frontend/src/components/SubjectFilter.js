import React, { Component } from 'react';
import FilterList from './FilterList.js';

class SubjectFilter extends Component {
  constructor(props){
    super(props)
    this.state = {
      questions: this.filterTopics(this.props.questions),
      display: null
    }

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
    if(!this.state.display){
      this.setState({display:
        <FilterList
        questions = {this.state.questions}
        />})
    } else {
      this.setState({display: null})
    }
  }

  render(){
    return(
      <div>
        <button onClick={this.handleClick}>Subjects</button>
        {this.state.display}
      </div>
    )
  }
}

export default SubjectFilter
