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
    randomIndex: generateRndIndx(state),
    cardLearned: state
  }
}

const mapDispatchToProps = dispatch => ({
  updateLearnedMark(id) {
      dispatch(() => {
        fetch(`http://localhost:3000/questions/${id}`, {
          method: 'PUT',
          body: JSON.stringify(id),
          headers: { 'Content-Type': 'application/json'}
        }
        )
        .then(res => res.json())
        .then(cardLearned => {
          dispatch({
            type: 'LOAD_QUESTIONS_DATA',
            cardLearned: cardLearned
          })
        })
      })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(FlashCard)
