import React, { Component } from 'react';
import FilterElement from './FilterElement.js';

class FilterList extends Component {
  constructor(props){
    super(props)
    this.state = {
      tickedArray: Array(this.props.questions.length).fill(false)
    }

    this.options = this.options.bind(this)
    this.selectAll = this.selectAll.bind(this)
    this.deselectAll = this.deselectAll.bind(this)
  }

  options(){
    return this.props.questions.map((element, index) => {
      return <FilterElement
      option= {element}
      handleCheck= {this.handleCheck}
      key= {index}
      index= {index}
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

 render(){
   return(
     <div className= "filter-container">
     {this.options()}
     <div onClick= {this.selectAll}>Select All </div>
     <div onClick= {this.deselectAll}>Deselect All </div>
     <div>Submit</div>
     </div>
   )
 }
}

export default FilterList
