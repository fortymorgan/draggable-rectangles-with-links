import React, { Component } from 'react';

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
    const { position, hovered, linking: { state } } = this.props;

    const coords = {
      top: {
        left: '45px',
        top: '-5px',
      },
      right: {
        left: '95px',
        top: '20px',
      },
      left: {
        left: '-5px',
        top: '20px',
      },
      bottom: {
        left: '45px',
        top: '45px',
      },
    }

    return (
      <div
        onClick={this.onClick}
        style={{
          position: 'absolute',
          width: '10px',
          height: '10px',
          background: '#808080',
          borderRadius: '50%',
          left: coords[position].left,
          top: coords[position].top,
          display: state || hovered ? 'block' : 'none',
          cursor: 'pointer',
        }}
      ></div>
    );
  }
}
