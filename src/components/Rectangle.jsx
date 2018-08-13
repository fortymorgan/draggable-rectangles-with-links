import React, { Component } from 'react';
import Point from '../containers/Point';
import { params } from '../rectParams';

export default class Rectangle extends Component {
  state = {
    dragging: false,
    hovered: true,
    diff: {
      x: 0,
      y: 0,
    },
    blockOnTop: false,
    blockOnBottom: false,
    blockOnLeft: false,
    blockOnRight: false,
  }

  onStart = ({ clientX, clientY }) => {
    const { position: { x, y } } = this.props.rect;

    const diff = { x: clientX - x, y: clientY - y };
    this.setState({ diff, dragging: true });
  }

  onMove = ({ clientX, clientY }) => {
    const { onRectMove, rect: { id, position } } = this.props;
    const {
      diff: { x, y },
      dragging,
      blockOnTop,
      blockOnBottom,
      blockOnRight,
      blockOnLeft,
    } = this.state;

    if (dragging) {
      let checkX
      if (blockOnLeft) {
        checkX = clientX - x > position.x ? clientX - x : position.x;
      } else if (blockOnRight) {
        checkX = clientX - x < position.x ? clientX - x : position.x;
      }
      
      let checkY
      if (blockOnTop) {
        checkY = clientY - y > position.y ? clientY - y : position.y;
      } else if (blockOnBottom) {
        checkY = clientY - y < position.y ? clientY - y : position.y;
      }
      
      this.checkBlock(blockOnRight || blockOnLeft ? checkX : clientX - x, blockOnTop || blockOnBottom ? checkY : clientY - y);
      const newCenter = { x: blockOnRight || blockOnLeft ? position.x : clientX - x, y: blockOnTop || blockOnBottom ? position.y : clientY - y };
      onRectMove(newCenter, id);
    }
  }

  checkBlock = (x, y) => {
    const { rects, rect: { id } } = this.props;
    const otherRects = rects.filter(rect => rect.id != id)

    const blockTop = otherRects.some(({ position }) =>
      params.height - 5 <= y - position.y &&
      y - position.y <= params.height + 1 &&
      Math.abs(position.x - x) < params.width);
    const blockBottom = otherRects.some(({ position }) =>
      params.height - 5 <= position.y - y &&
      position.y - y <= params.height + 1 &&
      Math.abs(position.x - x) < params.width);
    const blockRight = otherRects.some(({ position }) =>
      params.width - 5 <= position.x - x &&
      position.x - x <= params.width + 1 &&
      Math.abs(position.y - y) < params.height);
    const blockLeft = otherRects.some(({ position }) =>
      params.width - 5 <= x - position.x &&
      x - position.x <= params.width + 1 &&
      Math.abs(position.y - y) < params.height);

    this.setState({
      blockOnTop: blockTop,
      blockOnBottom: blockBottom,
      blockOnLeft: blockLeft,
      blockOnRight: blockRight,
    })
  }
  
  onStop = ({ clientX, clientY }) => {
    const { onRectMove, rect: { id, position } } = this.props;
    const {
      diff: { x, y },
      dragging,
      blockOnTop,
      blockOnBottom,
      blockOnRight,
      blockOnLeft,
    } = this.state;

    if (dragging) {
      const newCenter = { x: blockOnRight || blockOnLeft ? position.x : clientX - x, y: blockOnTop || blockOnBottom ? position.y : clientY - y };
      onRectMove(newCenter, id);
      this.setState({ dragging: false });
    }
  }

  onOver = () => {
    this.setState({ hovered: true });
  }

  onLeave = () => {
    this.setState({ hovered: false, dragging: false });
  }

  render() {
    const { position: { x, y }, color } = this.props.rect;
    const { dragging, hovered } = this.state;
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
