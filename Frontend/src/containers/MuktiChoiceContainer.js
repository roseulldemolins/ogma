import React, { Component } from 'react';
import MultiGame from '../components/MultiGame';
import './MultiChoiceContainer.css';
import { connect } from 'react-redux';

const filterQuestionsData = require('../helpers/PairsRandomiser.js');

const mapStateToProps = (state) => {
  return {
    MultiC: filterMultiCData(state),
    state
  }
}

export default connect(mapStateToProps)(MultiChoiceGame)
