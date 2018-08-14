import { createAction } from 'redux-actions';

export const addRectangle = createAction('RECTANGLE_ADD', (x, y, color) => ({ position: { x, y }, color }));
export const moveMouse = createAction('MOUSE_MOVE', (x, y) => ({ position: { x, y } }));
export const removeLink = createAction('LINK_REMOVE');
export const startDragging = createAction('DRAGGING_START');
export const stopDragging = createAction('DRAGGING_STOP');
export const pointClicked = createAction('POINT_CLICKED', (pos, id, coords) => ({ pos, id, coords }));
