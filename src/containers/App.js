import { connect } from 'react-redux';
import _ from 'lodash';
import * as actionCreators from '../actions';
import App from '../components/App';

const mapStateToProps = ({ rectangles, links }) => {
  return ({ rectangles: _.values(rectangles), links: _.values(links) })
};

export default connect(
  mapStateToProps,
  actionCreators,
)(App);
