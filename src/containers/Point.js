import { connect } from 'react-redux';
import * as actionCreators from '../actions';
import Point from '../components/Point';

const mapStateToProps = ({ linking, nextId }) => {
  return { linking, nextId };
};

export default connect(
  mapStateToProps,
  actionCreators,
)(Point);
