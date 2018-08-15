import { params } from './rectParams';

export default ({ x, y }, rectangles) => {
  const isOver = rectangles.some(({ position }) => Math.abs(x - position.x) < params.width && Math.abs(y - position.y) < params.height);

  if (isOver) {
    document.body.style.background = 'pink';
    setTimeout(() => document.body.style.background = '', 50);
  }

  return isOver;
};
