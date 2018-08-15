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
    // console.log(draggingRect)
    if (draggingRect) {
      const { id, diff } = draggingRect;
      const otherRects = _.filter(state, rect => rect.id !== id);
      const newPosition = { x: position.x - diff.x, y: position.y - diff.y };
      const isOver = isOverlapping(newPosition, otherRects);
      return { ...state, [id]: isOver ? state[id] : { ...state[id], position: newPosition } }
    } else {
      return state;
    }
  },
  [actions.startDragging](state, { payload: { id, x, y } }) {
    // console.log(state)
    // console.log(id)
    const { position } = state[id];
    const diff = { x: x - position.x, y: y - position.y }
    return { ...state, [id]: { ...state[id], dragging: true, diff } };
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
  [actions.cancelLink](state) {
    const linking = _.find(state, link => link.linking);

    if (linking) {
      return _.omit(state, linking.id);
    } else {
      return state;
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
