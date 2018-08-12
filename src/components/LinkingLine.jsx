import React, { Component } from 'react';
import Line from './Line';
import { deltas } from '../rectParams';

export default class LinkingLine extends Component {
  render() {
    const { start, rects, mouse } = this.props;
    const { pos, id } = start;
    const { x, y } = mouse;

    const rectFrom = rects.find(rect => rect.id === id);
    const from = { x: rectFrom.position.x + deltas[pos].x, y: rectFrom.position.y + deltas[pos].y }
    const to = { x, y };

    return (
      <Line
        x0={from.x}
        y0={from.y}
        x1={to.x}
        y1={to.y}
        color="#808080"
        width={2}
      />
    )
  }
}
