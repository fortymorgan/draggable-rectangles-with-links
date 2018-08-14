import { connect } from 'react-redux';
import * as actionCreators from '../actions';
import App from '../components/App';

const mapStateToProps = ({ rectangles, links, linking }) => {
  return ({ rectangles: Object.values(rectangles), links: Object.values(links), linking })
};

export default connect(
  mapStateToProps,
  actionCreators,
)(App);
