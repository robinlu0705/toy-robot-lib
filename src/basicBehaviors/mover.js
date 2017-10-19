import { MOVE, NAME_KEY, METHOD_KEY } from './constants';
import Utils from './Utils';

function newPosCalc(x, y, f) {
  switch (f) {
    case 'NORTH': {
      return {
        x,
        y: y + 1,
      };
    }

    case 'EAST': {
      return {
        x: x + 1,
        y,
      };
    }

    case 'SOUTH': {
      return {
        x,
        y: y - 1,
      };
    }

    case 'WEST': {
      return {
        x: x - 1,
        y,
      };
    }

    default: {
      return { x, y, f };
    }
  }
}

export default {
  [NAME_KEY]: MOVE,
  [METHOD_KEY]() {
    if (Utils.checkInside(this.state.x, this.state.y, this.state.tableSize)) {
      // it has been placed on a table
      const newPos = newPosCalc(this.state.x, this.state.y, this.state.f);

      if (Utils.checkInside(newPos.x, newPos.y, this.state.tableSize)) {
        // new position is still in the table
        this.state = {
          ...this.state,
          x: newPos.x,
          y: newPos.y,
        };
      }
    }
  },
};
