import React, { Component } from 'react';
import Rectangle from './Rectangle';
import Link from './Link';

export default class App extends Component {
  onAddRectangle = ({ clientX, clientY }) => {
    const { addRectangle, nextId } = this.props;

    const canAdd = this.checkSpace(clientX, clientY);

    if (canAdd) {
      const colors = ['fuchsia', 'cyan', 'lime', 'yellow'];
  
      const rand = Math.floor(Math.random() * 4);
  
      addRectangle(clientX, clientY, colors[rand], nextId);
    }
  }

  checkSpace = (x, y) => {
    const { rectangles } = this.props;

    return rectangles.every(({ position }) => Math.abs(x - position.x) >= 100 || Math.abs(y - position.y) >= 50); // add windowx x / y check
  }

  render() {
    const { rectangles, moveRectangle, links } = this.props;

    return (
      <div className="app">
        {rectangles.map(rect => <Rectangle key={rect.id} rect={rect} onRectMove={moveRectangle} />)}
        {links.map(({ a, b }) => (
          <Link
            key={`${a.pos}-${a.id}-${b.pos}-${b.id}`}
            a={a}
            b={b}
            rectangles={rectangles}
          />
        ))}
      </div>
    )
  }

  componentDidMount() {
    document.addEventListener('dblclick', this.onAddRectangle);
  }
}
