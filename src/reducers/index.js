import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import _ from 'lodash';
import * as actions from '../actions';
import isOverlapping from '../isOverlapping';
import triggerError from '../errorTrigger';

const rectangles = handleActions({
  [actions.addRectangle](state, { payload: { position, color } }) {
    const id = _.uniqueId();
    const isOver = isOverlapping(position, _.values(state));
    if (isOver) {
      triggerError(); // didn't find a better place to trigger
    }

    return isOver ? state : { ...state, [id]: { position, color, id, dragging: false } };
  },
  [actions.moveMouse](state, { payload: { position } }) {
    const draggingRect = _.find(state, rect => rect.dragging);
    if (draggingRect) {
      const { id, diff } = draggingRect;
      const otherRects = _.filter(state, rect => rect.id !== id);

      const newPositionX = { x: position.x - diff.x, y: state[id].position.y };
      const newPositionY = { x: state[id].position.x, y: position.y - diff.y };

      const isOverX = isOverlapping(newPositionX, otherRects);
      const isOverY = isOverlapping(newPositionY, otherRects);

      const newPosition = {
        x: isOverX ? state[id].position.x : position.x - diff.x,
        y: isOverY ? state[id].position.y : position.y - diff.y,
      }

      return { ...state, [id]: { ...state[id], position: newPosition } }
    } else {
      return state;
    }
  },
  [actions.startDragging](state, { payload: { id, x, y } }) {
    const { position } = state[id];
    const diff = { x: x - position.x, y: y - position.y }
    return { ...state, [id]: { ...state[id], dragging: true, diff } };
  },
  [actions.stopDragging](state) {
    return _.mapValues(state, rect => ({ ...rect, dragging: false }))
  },
}, {});

const links = handleActions({
  [actions.pointClicked](state, { payload: { pos, id, coords } }) {
    const linking = _.find(state, link => link.linking);

    if (linking) {
      return linking.a.id === id ? state :
        { ...state, [linking.id]: { ...state[linking.id], b: { pos, id }, linking: false } }
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
