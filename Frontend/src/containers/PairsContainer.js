import React, { Component } from 'react';
import PairsGame from '../components/PairsGame';
import './PairsContainer.css';
import { connect } from 'react-redux';

const filterQuestionsData = (state) => {
  const onlyQuestions = state.filter((question) => {
    return question.type === "q_and_a";
  });
  return getRandomElements(onlyQuestions)
}

var getRandomElements = function(onlyQuestions) {
    var result = [];
    for (var i = 0; i < 8; i++) {
        result.push(onlyQuestions[Math.floor(Math.random()*onlyQuestions.length)]);
    }
    const answerArray = makeAnswerArray(result);
    const questionArray = makeQuestionArray(result);
    const merge = answerArray.concat(questionArray)
    console.log(merge.sort(() => Math.random() - 0.5));
    return merge.sort(() => Math.random() - 0.5)
}


const makeAnswerArray = (array) => {
  const answerArray = array.map((question, index) => ({
    text: question.answer_text,
    matchingID: index
  }))
  return answerArray
}

const makeQuestionArray = (array) => {
  const questionArray = array.map((question, index) => ({
    text: question.question_text,
    matchingID: index
  }))
  return questionArray
}

const mapStateToProps = (state) => {
  return {
    QAndA: filterQuestionsData(state)
  }
}

export default connect(mapStateToProps)(PairsGame)
