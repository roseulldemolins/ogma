import React, { Component } from 'react';
import PairsGame from '../components/PairsGame';
import './PairsContainer.css';
import { connect } from 'react-redux';

const filterQuestionsDataTest = require('../helpers/PairsRandomiser.js');

const mapStateToProps = (state) => {
  return {
    QAndA: filterQuestionsDataTest(state)
  }
}


export default connect(mapStateToProps)(PairsGame)
