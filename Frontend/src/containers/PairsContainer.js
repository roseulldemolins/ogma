import React, { Component } from 'react';
import PairsGame from '../components/PairsGame';
import './PairsContainer.css';
import { connect } from 'react-redux';

const filterQuestionsData = require('../helpers/PairsRandomiser.js');

const mapStateToProps = (state) => {
  return {
    QAndA: filterQuestionsData(state),
    state
  }
}

export default connect(mapStateToProps)(PairsGame)
