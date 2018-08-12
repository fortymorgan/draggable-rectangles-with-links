export const params = {
  width: 200,
  height: 100,
};

export const deltas = {
  top: {
    x: 0,
    y: -((params.height / 2) - 1),
  },
  right: {
    x: (params.width / 2) - 1,
    y: 0,
  },
  left: {
    x: -((params.width / 2) - 1),
    y: 0,
  },
  bottom: {
    x: 0,
    y: (params.height / 2) - 1,
  },
};

export const coords = {
  top: {
    left: `${params.width / 2 - 5}px`,
    top: '-5px',
  },
  right: {
    left: `${params.width - 5}px`,
    top: `${params.height / 2 - 5}px`,
  },
  left: {
    left: '-5px',
    top: `${params.height / 2 - 5}px`,
  },
  bottom: {
    left: `${params.width / 2 - 5}px`,
    top: `${params.height - 5}px`,
  },
};
