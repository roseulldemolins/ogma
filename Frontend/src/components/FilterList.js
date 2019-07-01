import React, { Component } from 'react';
import FilterElement from './FilterElement.js';
import './FilterList.css';

class FilterList extends Component {
  constructor(props){
    super(props)
    this.state = {
      tickedArray: this.determineStartConditions(this.props.options),
      error: false
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

  nothingCheckedError(){
    if(this.state.error)
    return <div>You Must Select At Least One Sub-Topic</div>
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
    const checkTicks = this.state.tickedArray.findIndex((element) => {
      return element
    })
    if(checkTicks !== -1){
      const convertedArray = this.props.questions.map((element, index) => {
        if(this.state.tickedArray[index]){
          return element
        } else {return false}
      })
      this.setState({error: false})
      this.props.updateFilter(convertedArray)
      this.props.closeWindow()
    } else {
      this.setState({error: true})
    }
  }

 render(){
   return(
     <div className= "filter-container">
     {this.options()}
     <div className= "form-buttons" onClick= {this.selectAll}>Select All </div>
     <div className= "form-buttons" onClick= {this.deselectAll}>Deselect All </div>
     <div className= "form-buttons" onClick= {this.submit}>Submit</div>
     {this.nothingCheckedError()}
     </div>
   )
 }
}

export default FilterList
