import { connect } from 'react-redux';
import * as actionCreators from '../actions';
import App from '../components/App';

const mapStateToProps = ({ rectangles, nextId, links }) => {
  return ({ rectangles: Object.values(rectangles), nextId, links })
};

export default connect(
  mapStateToProps,
  actionCreators,
)(App);
