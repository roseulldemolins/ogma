import PairsGame from '../components/PairsGame';
import './PairsContainer.css';
import { connect } from 'react-redux';

const filterQuestionsData = require('../helpers/PairsRandomiser.js');
const selectedQuestions = require('../helpers/SelectedQuestions.js');

const mapStateToProps = (state) => {
  return {
    QAndA: filterQuestionsData(selectedQuestions(state.questions, state.options)),
    state: selectedQuestions(state.questions, state.options)
  }
}

export default connect(mapStateToProps)(PairsGame)
