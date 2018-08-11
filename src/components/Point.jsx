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
    const { position, hovered, rect: { id }, linking: { state } } = this.props;

    const coords = {
      top: {
        left: '47px',
        top: '-3px',
      },
      right: {
        left: '97px',
        top: '22px',
      },
      left: {
        left: '-3px',
        top: '22px',
      },
      bottom: {
        left: '47px',
        top: '47px',
      },
    }

    return (
      <div
        onMouseDown={e => e.stopPropagation()}
        onClick={this.onClick}
        style={{
          position: 'absolute',
          width: '6px',
          height: '6px',
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
