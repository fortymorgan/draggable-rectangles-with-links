import { connect } from 'react-redux';
import _ from 'lodash';
import * as actionCreators from '../actions';
import Point from '../components/Point';

const mapStateToProps = ({ links }) => {
  return { links: _.values(links) };
};

export default connect(
  mapStateToProps,
  actionCreators,
)(Point);
