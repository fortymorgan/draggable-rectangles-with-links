import { createAction } from 'redux-actions';

export const addRectangle = createAction('RECTANGLE_ADD', (x, y, color) => ({ position: { x, y }, color }));
export const moveMouse = createAction('MOUSE_MOVE', (x, y) => ({ position: { x, y } }));
export const removeLink = createAction('LINK_REMOVE');
export const cancelLink = createAction('LINK_CANCEL');
export const startDragging = createAction('DRAGGING_START', (id, x, y) => ({ id, x, y }));
export const stopDragging = createAction('DRAGGING_STOP');
export const pointClicked = createAction('POINT_CLICKED', (pos, id, coords) => ({ pos, id, coords }));
