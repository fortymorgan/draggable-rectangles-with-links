import React, { Component } from 'react';
import Draggable from 'react-draggable';
import Point from '../containers/Point';
import { params } from '../rectParams';

export default class Rectangle extends Component {
  constructor(props) {
    super(props);

    const bounds = this.checkBounds();

    this.state = {
      dragging: false,
      hovered: true,
      diff: {
        x: 0,
        y: 0,
      },
      bounds,
    }
  }

  onStart = ({ clientX, clientY }) => {
    const { position: { x, y } } = this.props.rect;

    const diff = { x: clientX - x, y: clientY - y };
    this.setState({ diff, dragging: true });
  }

  onMove = ({ clientX, clientY }) => {
    const { onRectMove, rect: { id } } = this.props;
    const { diff, dragging } = this.state;

    if (dragging) {
      const bounds = this.checkBounds()

      this.setState({ bounds });
      const newCenter = { x: clientX - diff.x, y: clientY - diff.y };
      onRectMove(newCenter, id);
    }
  }

  checkBounds = () => {
    const { rect: { id, position: { x, y } }, rects } = this.props;
    const { innerHeight, innerWidth } = window;
    const { width, height } = params;
    const defaultBounds = {
      left: 0,
      right: innerWidth - width,
      top: 0,
      bottom: innerHeight - height,
    }

    const otherRects = rects.filter(rect => rect.id != id);
    return otherRects.reduce((acc, { position }) => {
      if (position.x < x && Math.abs(position.y - y) < height) {
        const left = Math.max(position.x + width / 2, acc.left);
        return { ...acc, left };
      } else if (position.x > x && Math.abs(position.y - y) < height) {
        const right = Math.min(position.x - 3 * width / 2, acc.right);
        return { ...acc, right };
      } else if (position.y < y && Math.abs(position.x - x) < width) {
        const top = Math.max(position.y + height / 2, acc.top);
        return { ...acc, top };
      } else if (position.y > y && Math.abs(position.x - x) < width) {
        const bottom = Math.min(position.y - 3 * height / 2, acc.bottom)
        return { ...acc, bottom };
      } else {
        return acc;
      }
    }, defaultBounds)
  }

  onStop = () => {
    this.setState({ dragging: false });
  }

  onOver = () => {
    this.setState({ hovered: true });
  }

  onLeave = () => {
    this.setState({ hovered: false });
  }

  render() {
    const { position: { x, y }, color } = this.props.rect;
    const { dragging, hovered, bounds } = this.state;
    const { width, height } = params;

    const style = {
      width,
      height,
      position: 'absolute',
      background: color,
      cursor: dragging ? 'move' : 'default',
    };

    return (
      <Draggable
        onStart={this.onStart}
        onDrag={this.onMove}
        onStop={this.onStop}
        position={{ x: x - width / 2, y: y - height / 2 }}
        bounds={bounds}
      >
        <div
          style={style}
          onMouseOver={this.onOver}
          onMouseOut={this.onLeave}
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
      </Draggable>
    );
  }
}
