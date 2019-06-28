import React, { Component } from 'react';
import FilterElement from './FilterElement.js';

class FilterList extends Component {
  constructor(props){
    super(props)
    this.state = {
      tickedArray: this.determineStartConditions(this.props.options)
    }

    this.options = this.options.bind(this)
    this.selectAll = this.selectAll.bind(this)
    this.deselectAll = this.deselectAll.bind(this)
    this.submit = this.submit.bind(this)
  }

  determineStartConditions(array){
    if(!array.length){
      return Array(this.props.questions.length).fill(true)
    } return array.map((element) => {
        return Boolean(element)
    })
  }

  options(){
    return this.props.questions.map((element, index) => {
      return <FilterElement
      option= {element}
      handleCheck= {this.handleCheck}
      key= {index}
      index= {index}
      tickedArray= {this.state.tickedArray}
      />
    })
  }

  handleCheck = (index) => {
    this.setState({
      tickedArray: [...this.state.tickedArray.slice(0,index), !this.state.tickedArray[index], ...this.state.tickedArray.slice(index+1)]
    })
  }

  selectAll = () => {
    this.setState({
      tickedArray: Array(this.props.questions.length).fill(true)
    })
  }

  deselectAll = () => {
    this.setState({
      tickedArray: Array(this.props.questions.length).fill(false)
    })
  }

  submit = () => {
    const convertedArray = this.props.questions.map((element, index) => {
      if(this.state.tickedArray[index]){
        return element
      } else {return false}
    })
    console.log(convertedArray);
    this.props.updateFilter(convertedArray)
  }

 render(){
   return(
     <div className= "filter-container">
     {this.options()}
     <div onClick= {this.selectAll}>Select All </div>
     <div onClick= {this.deselectAll}>Deselect All </div>
     <div onClick= {this.submit}>Submit</div>
     </div>
   )
 }
}

export default FilterList
