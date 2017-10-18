import Utils from './Utils';

function newFacingCalc(f) {
  const idx = rotationList.indexOf(f);
  if (idx !== -1) {
    const newIdx = (idx + 1) % rotationList.length;
    return rotationList[newIdx];
  }
}

const rotationList = [ 'NORTH', 'WEST', 'SOUTH', 'EAST' ];

export { LEFT as METHOD_NAME } from './constants';
export default function() {
  return function() {
    if (Utils.checkInside(this.state.x, this.state.y, this.state.tableSize)) {
      // it has been placed on a table
      this.state = {
        ...this.state,
        f: newFacingCalc(this.state.f),
      };
    }
  };
}
