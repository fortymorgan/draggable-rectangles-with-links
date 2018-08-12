import React, { Component } from 'react';
import { Line } from 'react-lineto';
import { deltas } from '../rectParams';

export default class Link extends Component {
  render() {
    const { a, b, rectangles } = this.props;

    const rectFrom = rectangles.find(rect => rect.id === a.id);
    const rectTo = rectangles.find(rect => rect.id === b.id);

    const from = { x: rectFrom.position.x + deltas[a.pos].x, y: rectFrom.position.y + deltas[a.pos].y }
    const to = { x: rectTo.position.x + deltas[b.pos].x, y: rectTo.position.y + deltas[b.pos].y }

    return (
      <div
        key={`${a.pos}-${a.id}-${b.pos}-${b.id}`}
      >
        <Line
          x0={from.x}
          y0={from.y}
          x1={to.x}
          y1={to.y}
          borderColor="#808080"
          borderWidth={2}
          zIndex={-1}
        />
      </div>
    );
  }
}
