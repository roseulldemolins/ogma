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
    console.log(merge.sort(() => Math.random() - 0.5))
    return answerArray.concat(questionArray)
}


const makeAnswerArray = (array) => {
  const answerArray = array.map(question => ({
    text: question.answer_text,
    id: question._id
  }))
  return answerArray
}

const makeQuestionArray = (array) => {
  const questionArray = array.map(question => ({
    text: question.question_text,
    id: question._id
  }))
  return questionArray
}

const mapStateToProps = (state) => {
  return {
    QAndA: filterQuestionsData(state)
  }
}

export default connect(mapStateToProps)(PairsGame)
