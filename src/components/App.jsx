import React, { Component } from 'react';
import Rectangle from './Rectangle';
import Link from './Link';

export default class App extends Component {
  onAddRectangle = ({ clientX, clientY }) => {
    const { addRectangle, nextId } = this.props;

    const colors = ['fuchsia', 'cyan', 'lime', 'yellow'];
    const rand = Math.floor(Math.random() * 4);

    addRectangle(clientX, clientY, colors[rand], nextId);
  }

  onRemoveLink = (id) => () => {
    const { removeLink } = this.props;

    removeLink(id);
  }

  onStartDragging = (id) => () => {
    const { startDragging } = this.props;

    startDragging(id);
  }

  onStopDragging = (id) => () => {
    const { stopDragging } = this.props;

    stopDragging(id);
  }

  render() {
    const {
      rectangles,
      links,
      linking
    } = this.props;

    return (
      <div className="app" style={{ transformStyle: 'preserve-3d' }}>
        {rectangles.map(rect => (
          <Rectangle
            key={rect.id}
            rect={rect}
            onStart={this.onStartDragging(rect.id)}
            onStop={this.onStopDragging(rect.id)}
          />
        ))}
        {links.map(({ id, a, b }) => (
          <Link
            key={id}
            a={a}
            b={b}
            rectangles={rectangles}
            onRemove={this.onRemoveLink(id)}
          />
        ))}
      </div>
    )
  }

  componentDidMount() {
    const { moveMouse } = this.props;

    document.addEventListener('dblclick', this.onAddRectangle);
    document.addEventListener('mousemove', ({ clientX, clientY }) => moveMouse(clientX,clientY));
  }
}
