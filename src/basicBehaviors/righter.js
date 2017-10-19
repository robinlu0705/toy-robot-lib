import { RIGHT, NAME_KEY, METHOD_KEY } from './constants';
import Utils from './Utils';

const rotationList = ['NORTH', 'EAST', 'SOUTH', 'WEST'];

function newFacingCalc(f) {
  const idx = rotationList.indexOf(f);
  if (idx !== -1) {
    const newIdx = (idx + 1) % rotationList.length;
    return rotationList[newIdx];
  }

  return f;
}

export default {
  [NAME_KEY]: RIGHT,
  [METHOD_KEY]() {
    if (Utils.checkInside(this.state.x, this.state.y, this.state.tableSize)) {
      // it has been placed on a table
      this.state = {
        ...this.state,
        f: newFacingCalc(this.state.f),
      };
    }
  },
};
