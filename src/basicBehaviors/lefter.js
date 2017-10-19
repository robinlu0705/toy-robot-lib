import { LEFT, NAME_KEY, METHOD_KEY } from './constants';
import Utils from './Utils';

const rotationList = ['NORTH', 'WEST', 'SOUTH', 'EAST'];

function newFacingCalc(f) {
  const idx = rotationList.indexOf(f);
  if (idx !== -1) {
    const newIdx = (idx + 1) % rotationList.length;
    return rotationList[newIdx];
  }

  return f;
}

export default {
  [NAME_KEY]: LEFT,
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
