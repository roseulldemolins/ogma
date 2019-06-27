import React, { Component } from 'react';
import FilterElement from './FilterElement.js';

class FilterList extends Component {
  constructor(props){
    super(props)
    this.options = this.options.bind(this)
  }

  options(){
    return this.props.questions.map((element, index) => {
      return <FilterElement
      option= {element}
      key= {index}
      />
    })
  }

 render(){
   return(
     <div className= "filter-container">
     {this.options()}
     <FilterElement option= {'Select All'} />
     <FilterElement option= {'Deselect All'} />
     <div>Submit</div>
     </div>
   )
 }
}

export default FilterList
