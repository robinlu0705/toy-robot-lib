import { NAME_KEY, METHOD_KEY } from './constants';

export default {
  checkInside(x, y, size) {
    if (!Number.isInteger(x)
      || !Number.isInteger(y)
      || !Number.isInteger(size)
      || x < 0
      || x >= size
      || y < 0
      || y >= size
    ) {
      return false;
    }

    return true;
  },

  assemble(...args) {
    return args.reduce((comp, arg) => {
      if (arg[NAME_KEY] && typeof arg[METHOD_KEY] === 'function') {
        return {
          ...comp,
          [arg[NAME_KEY]]: arg[METHOD_KEY],
        };
      }

      return comp;
    }, {});
  },
};
