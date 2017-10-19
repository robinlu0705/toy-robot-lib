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

export { LEFT as METHOD_NAME } from './constants';
export default function () {
  return function left() {
    if (Utils.checkInside(this.state.x, this.state.y, this.state.tableSize)) {
      // it has been placed on a table
      this.state = {
        ...this.state,
        f: newFacingCalc(this.state.f),
      };
    }
  };
}
