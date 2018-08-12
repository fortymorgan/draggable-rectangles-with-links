import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import _ from 'lodash';
import * as actions from '../actions';

const rectangles = handleActions({
  [actions.addRectangle](state, { payload: { position, color, id } }) {
    return { ...state, [id]: { position, color, id } };
  },
  [actions.moveRectangle](state, { payload: { position, id } }) {
    return { ...state, [id]: { ...state[id], position } };
  },
}, {});

const nextId = handleActions({
  [actions.addRectangle](state) {
    return state + 1;
  },
  [actions.addLink](state) {
    return state + 1;
  }
}, 0);

const linking = handleActions({
  [actions.startLinking](state, { payload: { pos, id } }) {
    return { state: true, start: { pos, id } };
  },
  [actions.addLink]() {
    return { state: false };
  },
}, { state: false });

const links = handleActions({
  [actions.addLink](state, { payload }) {
    return { ...state, [payload.id]: payload };
  },
  [actions.removeLink](state, { payload }) {
    return _.omit(state, payload);
  }
}, {});

export default combineReducers({
  rectangles,
  nextId,
  linking,
  links,
});
