import PairsGame from '../components/PairsGame';
import './PairsContainer.css';
import { connect } from 'react-redux';

const filterQuestionsData = require('../helpers/PairsRandomiser.js');
const selectedQuestions =  require('../helpers/SelectedQuestions.js');

const mapStateToProps = (state) => {
  return {
    QAndA: filterQuestionsData(state.questions),
    state: state.questions
  }
}

export default connect(mapStateToProps)(PairsGame)
