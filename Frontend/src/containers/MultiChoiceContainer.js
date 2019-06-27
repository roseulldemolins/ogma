import React, { Component } from 'react';
import MultiChoiceGame from '../components/MultiChoiceGame';
import './MultiChoiceContainer.css';
import { connect } from 'react-redux';

const filterMultiCData = require('../helpers/MultiChoiceRandomiser.js');

const mapStateToProps = (state) => {
  return {
    MultiC: filterMultiCData(state),
    state
  }
}

export default connect(mapStateToProps)(MultiChoiceGame)
