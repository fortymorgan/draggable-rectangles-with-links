import { connect } from 'react-redux';
import * as actionCreators from '../actions';
import Point from '../components/Point';

const mapStateToProps = ({ linking }) => {
  return { linking };
};

export default connect(
  mapStateToProps,
  actionCreators,
)(Point);
