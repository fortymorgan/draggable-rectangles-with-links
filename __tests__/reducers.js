import reducers from '../src/reducers';
import * as actions from '../src/actions';
import { rectangles, links } from './__assets__/states';

describe('rectangles reducers', () => {

  it('should return initial state', () => {
    expect(reducers(undefined, {}).rectangles).toEqual(rectangles[0]);
  });

  it('should add rectangle', () => {
    const action = actions.addRectangle(100, 50, 'fuchsia');
    expect(reducers(rectangles[0], action)).toEqual(rectangles[1]);
  });

  it('should add another rectangle', () => {
    const action = actions.addRectangle(400, 50, 'lime');
    expect(reducers(rectangles[1], action)).toEqual(rectangles[2]);
  });

  it('shouldn\'t add a rectangle', () => {
    const action = actions.addRectangle(250, 50, 'cyan');
    expect(reducers(rectangles[2], action)).toEqual(rectangles[2]);
  });

  it('should start dragging', () => {
    const action = actions.startDragging('2', 450, 25);
    expect(reducers(rectangles[2], action)).toEqual(rectangles[3]);
  });

  it('should stop dragging', () => {
    const action = actions.stopDragging();
    expect(reducers(rectangles[3], action)).toEqual(rectangles[4]);
  });

  it('should move rectangle on x', () => {
    const action = actions.moveMouse(350, 25);
    expect(reducers(rectangles[3], action)).toEqual(rectangles[5]);
  });

  it('shouldn\'t move rectangle', () => {
    const action = actions.moveMouse(349, 25);
    expect(reducers(rectangles[5], action)).toEqual(rectangles[5]);
  });

  it('should move rectangle on y', () => {
    const action = actions.moveMouse(350, 75);
    expect(reducers(rectangles[5], action)).toEqual(rectangles[6]);
  });
});

describe('links reducers', () => {

  it('should return initial state', () => {
    expect(reducers(undefined, {}).links).toEqual(links[0]);
  });

  it('should add link', () => {
    const action = actions.pointClicked('right', '1', { x: 200, y: 50 });
    expect(reducers(links[1], action)).toEqual(links[2]);
  });

  it('should move link', () => {
    const action = actions.moveMouse(300, 50);
    expect(reducers(links[2], action)).toEqual(links[3]);
  });

  it('should end link', () => {
    const action = actions.pointClicked('left', '2');
    expect(reducers(links[3], action)).toEqual(links[4]);
  });

  it('should remove link', () => {
    const action = actions.removeLink('4');
    expect(reducers(links[4], action)).toEqual(links[1]);
  });
});
