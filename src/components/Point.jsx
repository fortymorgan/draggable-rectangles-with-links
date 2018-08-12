import React, { Component } from 'react';
import { coords } from '../rectParams';

export default class Point extends Component {
  onClick = () => {
    const { linking: { start, state }, startLinking, addLink, position, rect: { id } } = this.props;
    if (!state) {
      startLinking(position, id);
    } else {
      addLink(start.pos, start.id, position, id);
    }
  }

  render() {
    const { position, hovered, linking } = this.props;

    const style = {
      position: 'absolute',
      width: '10px',
      height: '10px',
      background: '#808080',
      borderRadius: '50%',
      left: coords[position].left,
      top: coords[position].top,
      display: linking.state || hovered ? 'block' : 'none',
      cursor: 'pointer',
    };

    return (
      <div
        onClick={this.onClick}
        style={style}
      ></div>
    );
  }
}
