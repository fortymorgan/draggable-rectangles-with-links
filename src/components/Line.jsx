import React, { Component } from 'react';

export default class Line extends Component {
  render() {
    const { x0, y0, x1, y1, color, width, zIndex } = this.props;

    const dy = y1 - y0;
    const dx = x1 - x0;

    const angle = Math.atan2(dy, dx) * 180 / Math.PI;
    const length = Math.sqrt(dx * dx + dy * dy);

    const style = {
      position: 'absolute',
      top: `${y0}px`,
      left: `${x0}px`,
      width: `${length}px`,
      zIndex,
      transform: `rotate(${angle}deg)`,
      transformOrigin: '0',
      background: color,
      height: width,
    };

    return (
      <div style={style} />
    );
  }
}