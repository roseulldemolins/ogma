import SubjectFilter from '../components/SubjectFilter';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    questions: state
  }
};


export default connect(mapStateToProps)(SubjectFilter)
