import Utils from './Utils';

function newPosCalc(x, y, f) {
  switch(f) {
    case 'NORTH': {
      return {
        x: x,
        y: y + 1,
      };

      break;
    }

    case 'EAST': {
      return {
        x: x + 1,
        y: y,
      };

      break;
    }

    case 'SOUTH': {
      return {
        x: x,
        y: y - 1,
      };

      break;
    }

    case 'WEST': {
      return {
        x: x - 1,
        y: y,
      };

      break;
    }
  }
}

export { MOVE as METHOD_NAME } from './constants';
export default function() {
  return function() {
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
  };
}
