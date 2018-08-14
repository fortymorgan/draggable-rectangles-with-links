import { connect } from 'react-redux';
import * as actionCreators from '../actions';
import Point from '../components/Point';

const mapStateToProps = ({ links }) => {
  return { links: Object.values(links) };
};

export default connect(
  mapStateToProps,
  actionCreators,
)(Point);
