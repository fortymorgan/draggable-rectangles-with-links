import React, { Component } from 'react';
import { coords } from '../rectParams';

export default class Point extends Component {
  onClick = (e) => {
    e.stopPropagation();
    const { rectId, pointClicked, position } = this.props;
    pointClicked(position, rectId, { x: e.clientX, y: e.clientY });
  }

  render() {
    const { position, show, links } = this.props;

    const linking = links.find(link => link.linking);

    const style = {
      position: 'absolute',
      width: '10px',
      height: '10px',
      background: '#808080',
      borderRadius: '50%',
      left: coords[position].left,
      top: coords[position].top,
      display: linking || show ? 'block' : 'none',
      cursor: 'pointer',
      zIndex: 2,
    };

    return (
      <div
        onMouseDown={(e) => e.stopPropagation()}
        onClick={this.onClick}
        style={style}
      ></div>
    );
  }
}
