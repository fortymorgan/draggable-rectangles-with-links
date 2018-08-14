import React, { Component } from 'react';
import Line from './Line';
import { deltas } from '../rectParams';

export default class Link extends Component {
  render() {
    const { a, b, rectangles, onRemove } = this.props;

    const rectFrom = rectangles.find(rect => rect.id === a.id);
    
    const from = { x: rectFrom.position.x + deltas[a.pos].x, y: rectFrom.position.y + deltas[a.pos].y }

    let to;
    if (b.id) {
      const rectTo = rectangles.find(rect => rect.id === b.id);
      to = { x: rectTo.position.x + deltas[b.pos].x, y: rectTo.position.y + deltas[b.pos].y }
    } else {
      to = b;
    }

    return (
      <div onClick={onRemove}>
        <Line
          x0={from.x}
          y0={from.y}
          x1={to.x}
          y1={to.y}
          color='#808080'
          width={2}
        />
      </div>
    );
  }
}
