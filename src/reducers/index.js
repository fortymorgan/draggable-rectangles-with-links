import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import _ from 'lodash';
import * as actions from '../actions';
import isOverlapping from '../isOverlapping';

const rectangles = handleActions({
  [actions.addRectangle](state, { payload: { position, color } }) {
    const id = _.uniqueId();
    return isOverlapping(position, Object.values(state)) ? state : { ...state, [id]: { position, color, id, dragging: false } };
  },
  [actions.moveMouse](state, { payload: { position } }) {
    const draggingRect = _.find(state, rect => rect.dragging);
    if (draggingRect) {
      const { id } = draggingRect;
      const otherRects = _.filter(state, rect => rect.id !== id);
      const isOver = isOverlapping(position, otherRects);
      return { ...state, [id]: isOver ? state[id] : { ...state[id], position } }
    } else {
      return state;
    }
  },
  [actions.startDragging](state, { payload }) {
    return { ...state, [payload]: { ...state[payload], dragging: true } };
  },
  [actions.stopDragging](state, { payload }) {
    return { ...state, [payload]: { ...state[payload], dragging: false } };
  },
}, {});

const links = handleActions({
  [actions.pointClicked](state, { payload: { pos, id, coords } }) {
    const linking = _.find(state, link => link.linking);

    if (linking) {
      return { ...state, [linking.id]: { ...state[linking.id], b: { pos, id }, linking: false } }
    } else {
      const newId = _.uniqueId();
      return { ...state, [newId]: { id: newId, a: { pos, id }, linking: true, b: coords } };
    }
  },
  [actions.moveMouse](state, { payload: { position } }) {
    const linking = _.find(state, link => link.linking);

    if (linking) {
      const { id } = linking;
      return { ...state, [id]: { ...state[id], b: position } };
    } else {
      return state;
    }
  },
  [actions.removeLink](state, { payload }) {
    return _.omit(state, payload);
  }
}, {});

export default combineReducers({
  rectangles,
  links,
});
