// import React from 'react';
import FlashCard from '../components/FlashCard.js'
import { connect } from 'react-redux';
import './FlashCardContainer.css';

const mapStateToProps = (state) => {
  return {
    questions: state
  }
};

export default connect(mapStateToProps)(FlashCard)
