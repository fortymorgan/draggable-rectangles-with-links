import React, { Component } from 'react';
import Point from '../containers/Point';
import { params } from '../rectParams';

export default class Rectangle extends Component {
  state = {
    hovered: true,
  }

  onOver = () => {
    this.setState({ hovered: true });
  }

  onLeave = () => {
    this.setState({ hovered: false });
  }

  render() {
    const {
      rect: {
        dragging,
        position: { x, y },
        color,
        id,
      },
      onStart,
      onStop,
    } = this.props;
    const { hovered } = this.state;
    const { width, height } = params;

    const style = {
      width,
      height,
      position: 'absolute',
      left: x - width / 2,
      top: y - height / 2,
      background: color,
      cursor: dragging ? 'move' : 'default',
    };

    return (
      <div
        onMouseDown={onStart}
        onMouseUp={onStop}
        style={style}
        onMouseOver={this.onOver}
        onMouseOut={this.onLeave}
      >
        {['top', 'right', 'bottom', 'left'].map(pos => (
          <Point
            key={pos}
            position={pos}
            show={hovered}
            rectId={id}
          />)
        )}
      </div>
    );
  }
}
