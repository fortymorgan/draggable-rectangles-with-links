export const rectangles = {
  0: {},
  1: {
    rectangles: {
      1: {
        id: '1',
        position: {
          x: 100,
          y: 50
        },
        color: 'fuchsia',
        dragging: false,
      },
    },
    links: {},
  },
  2: {
    rectangles: {
      1: {
        id: '1',
        position: {
          x: 100,
          y: 50
        },
        color: 'fuchsia',
        dragging: false,
      },
      2: {
        id: '2',
        position: {
          x: 400,
          y: 50
        },
        color: 'lime',
        dragging: false,
      },
    },
    links: {},
  },
  3: {
    rectangles: {
      1: {
        id: '1',
        position: {
          x: 100,
          y: 50
        },
        color: 'fuchsia',
        dragging: false,
      },
      2: {
        id: '2',
        position: {
          x: 400,
          y: 50
        },
        color: 'lime',
        dragging: true,
      },
    },
    links: {},
  },
  4: {
    rectangles: {
      1: {
        id: '1',
        position: {
          x: 100,
          y: 50
        },
        color: 'fuchsia',
        dragging: false,
      },
      2: {
        id: '2',
        position: {
          x: 300,
          y: 50
        },
        color: 'lime',
        dragging: true,
      },
    },
    links: {},
  },
  5: {
    rectangles: {
      1: {
        id: '1',
        position: {
          x: 100,
          y: 50
        },
        color: 'fuchsia',
        dragging: false,
      },
      2: {
        id: '2',
        position: {
          x: 300,
          y: 100
        },
        color: 'lime',
        dragging: true,
      },
    },
    links: {},
  },
};

export const links = {
  0: {},
  1: {
    rectangles: {
      1: {
        id: '1',
        position: {
          x: 100,
          y: 50
        },
        color: 'fuchsia',
        dragging: false,
      },
      2: {
        id: '2',
        position: {
          x: 400,
          y: 50
        },
        color: 'lime',
        dragging: false,
      },
    },
    links: {},
  },
  2: {
    rectangles: {
      1: {
        id: '1',
        position: {
          x: 100,
          y: 50
        },
        color: 'fuchsia',
        dragging: false,
      },
      2: {
        id: '2',
        position: {
          x: 400,
          y: 50
        },
        color: 'lime',
        dragging: false,
      },
    },
    links: {
      4: {
        id: '4',
        a: {
          id: '1',
          pos: 'right'
        },
        linking: true,
        b: {
          x: 200,
          y: 50,
        },
      },
    },
  },
  3: {
    rectangles: {
      1: {
        id: '1',
        position: {
          x: 100,
          y: 50
        },
        color: 'fuchsia',
        dragging: false,
      },
      2: {
        id: '2',
        position: {
          x: 400,
          y: 50
        },
        color: 'lime',
        dragging: false,
      },
    },
    links: {
      4: {
        id: '4',
        a: {
          id: '1',
          pos: 'right'
        },
        linking: true,
        b: {
          x: 300,
          y: 50,
        },
      },
    },
  },
  4: {
    rectangles: {
      1: {
        id: '1',
        position: {
          x: 100,
          y: 50
        },
        color: 'fuchsia',
        dragging: false,
      },
      2: {
        id: '2',
        position: {
          x: 400,
          y: 50
        },
        color: 'lime',
        dragging: false,
      },
    },
    links: {
      4: {
        id: '4',
        a: {
          id: '1',
          pos: 'right'
        },
        linking: false,
        b: {
          id: '2',
          pos: 'left',
        },
      },
    },
  },
};
