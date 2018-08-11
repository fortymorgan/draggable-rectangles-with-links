import React, { Component } from 'react';
import Point from '../containers/Point';

export default class Rectangle extends Component {
  state = {
    dragging: false,
    hovered: true,
    diff: {
      x: 0,
      y: 0,
    },
  }

  onStart = ({ clientX, clientY }) => {
    const { position: { x, y } } = this.props.rect;

    const diff = { x: clientX - x, y: clientY - y };
    this.setState({ diff, dragging: true });
  }

  onMove = ({ clientX, clientY }) => {
    const { onRectMove, rect: { id } } = this.props;
    const { diff: { x, y }, dragging } = this.state;

    if (dragging) {
      const newCenter = { x: clientX - x, y: clientY - y };
      onRectMove(newCenter, id);
    }
  }
  
  onStop = ({ clientX, clientY }) => {
    const { onRectMove, rect: { id } } = this.props;
    const { diff: { x, y }, dragging } = this.state;

    if (dragging) {
      const newCenter = { x: clientX - x, y: clientY - y };
      onRectMove(newCenter, id);
      this.setState({ dragging: false });
    }
  }

  onOver = () => {
    this.setState({ hovered: true });
  }

  onLeave = () => {
    this.setState({ hovered: false });
  }

  render() {
    const { position: { x, y }, color } = this.props.rect;
    const { dragging, hovered } = this.state;
    const [width, height] = [100, 50];
  
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
        style={style}
        onMouseDown={this.onStart}
        onMouseMove={this.onMove}
        onMouseUp={this.onStop}
        onMouseOver={this.onOver}
        onMouseLeave={this.onLeave}
      >
        {['top', 'right', 'bottom', 'left'].map(pos => (
          <Point
            key={pos}
            position={pos}
            hovered={hovered}
            rect={this.props.rect}
          />)
        )}
      </div>
    );
  }
}
