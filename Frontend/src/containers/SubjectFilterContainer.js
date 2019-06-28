import SubjectFilter from '../components/SubjectFilter';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    questions: state.questions,
    options: state.options
  }
};

const mapDispatchToProps = (dispatch) => ({
  updateFilter(filterArray) {
    dispatch({
      type: 'UPDATE_FILTER',
      filterArray
    })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(SubjectFilter)
