export const params = {
  width: 100,
  height: 50,
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
};
