import FlashCard from '../components/FlashCard.js'
import { connect } from 'react-redux';
import './FlashCardContainer.css';

const selectedQuestions =  require('../helpers/SelectedQuestions.js');

const filterQuestionsData = (state) => {
  const onlyQuestions = state.filter((question) => {
    return question.type === "q_and_a"
  });
  const onlyNotLearned = onlyQuestions.filter((question) => {
    return question.learned === false
  })
  return onlyNotLearned
}

const generateRndIndx = (state) => {
  const randomised = Math.floor(Math.random()*Math.floor(filterQuestionsData(state).length));
  return randomised
}

const mapStateToProps = (state) => {
  return {
    questionList: selectedQuestions(filterQuestionsData(state.questions), state.options),
    randomIndex: generateRndIndx(selectedQuestions(state.questions, state.options)),
  }
}

const mapDispatchToProps = dispatch => ({
  updateLearnedMark(id) {
    let isLearned = {learned: true}
      dispatch(() => {
        fetch(`http://localhost:3000/questions/${id}`, {
          method: 'PUT',
          body: JSON.stringify(isLearned),
          headers: { 'Content-Type': 'application/json'}
        }
        )
        .then(res => res.json())
        .then(questionsData => {
          dispatch({
            type: 'LOAD_QUESTIONS_DATA',
            questionsData
          })
        })
      })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(FlashCard)
