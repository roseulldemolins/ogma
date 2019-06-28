import SubjectFilter from '../components/SubjectFilter';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    questions: state.questions,
    options: state.options
  }
};


export default connect(mapStateToProps)(SubjectFilter)
