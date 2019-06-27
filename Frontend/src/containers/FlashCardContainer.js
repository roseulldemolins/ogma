import FlashCard from '../components/FlashCard.js'
import { connect } from 'react-redux';
import './FlashCardContainer.css';

const filterQuestionsData = (state) => {
  const onlyQuestions = state.filter((question) => {
    return question.type === "q_and_a";
  });
  return onlyQuestions
}

const generateRndIndx = (state) => {
  const onlyQuestions = state.filter((question) => {
    return question.type === "q_and_a";
  });
  const randomised = Math.floor(Math.random()*Math.floor(onlyQuestions.length));
  return randomised
}

const mapStateToProps = (state) => {
  return {
    questionList: filterQuestionsData(state),
    randomIndex: generateRndIndx(state)
  }
}

export default connect(mapStateToProps)(FlashCard)
