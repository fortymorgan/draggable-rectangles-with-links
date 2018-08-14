import { params } from './rectParams';

export default ({ x, y }, rectangles) =>
  rectangles.some(({ position }) => Math.abs(x - position.x) < params.width && Math.abs(y - position.y) < params.height);
