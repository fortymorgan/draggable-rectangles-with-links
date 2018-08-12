import { createAction } from 'redux-actions';

export const addRectangle = createAction('RECTANGLE_ADD', (x, y, color, id) => ({ position: { x, y }, color, id }));
export const moveRectangle = createAction('RECTANGLE_MOVE', (position, id) => ({ position, id }));
export const startLinking = createAction('LINKING_START', (pos, id) => ({ pos, id }));
export const addLink = createAction('LINK_ADD', (pos0, id0, pos1, id1, id) => ({ id, a: { pos: pos0, id: id0 }, b: { pos: pos1, id: id1 } }));
export const removeLink = createAction('LINK_REMOVE');
