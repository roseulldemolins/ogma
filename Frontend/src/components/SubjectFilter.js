import React, { Component } from 'react';
import FilterList from './FilterList.js';
import './SubjectFilter.css'

const filteringMechanism = require('../helpers/FilteringMechanism.js');

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
    return filteringMechanism(array)
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
        options = {this.props.options}
        updateFilter = {this.props.updateFilter}
        closeWindow = {this.handleClick}
        />})
    } else {
      this.setState({display: null})
    }
  }

  render(){
    return(
      <div className= "subFilter">
        <div className="subTopics" onClick={this.handleClick}>Sub Topics</div>
        {this.state.display}
      </div>
    )
  }
}

export default SubjectFilter
