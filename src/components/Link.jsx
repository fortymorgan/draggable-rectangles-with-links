import React, { Component } from 'react';
import _ from 'lodash';
import Line from './Line';
import { deltas } from '../rectParams';

export default class Link extends Component {
  render() {
    const { a, b, rectangles, onRemove, linking } = this.props;

    const rectFrom = _.find(rectangles, rect => rect.id === a.id);
    
    const from = { x: rectFrom.position.x + deltas[a.pos].x, y: rectFrom.position.y + deltas[a.pos].y }

    let to;
    if (b.id) {
      const rectTo = _.find(rectangles, rect => rect.id === b.id);
      to = { x: rectTo.position.x + deltas[b.pos].x, y: rectTo.position.y + deltas[b.pos].y }
    } else {
      to = b;
    }

    return (
      <Line
        onClick={onRemove}
        x0={from.x}
        y0={from.y}
        x1={to.x}
        y1={to.y}
        color='#808080'
        width={2}
        zIndex={linking ? '1' : '-1'}
      />
    );
  }
}
