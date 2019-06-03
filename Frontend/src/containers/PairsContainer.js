import React, { Component } from 'react';
import PairsGame from '../components/PairsGame';
import './PairsContainer.css';
import { connect } from 'react-redux';

const filterQuestionsData = (state) => {
  const onlyQuestions = state.filter((question) => {
    return question.type === "q_and_a";
  });
  console.log(onlyQuestions);
  return onlyQuestions
}

var getRandomElements = function(onlyQuestions) {
    var result = [];
    for (var i = 0; i < 8; i++) {
        result.push(onlyQuestions[Math.floor(Math.random()*onlyQuestions.length)]);
    }
    return result;
}

// const answerArray = array.map((answer_text, index) => {
//   return
// })
//
// const questionArray = array.map((question_text, index) => {
//   return
// })

const mapStateToProps = (state) => {
  return {
    QAndA: filterQuestionsData(state)
  }
}

export default connect(mapStateToProps)(PairsGame)
