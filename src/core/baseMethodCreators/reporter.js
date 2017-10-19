import Utils from './Utils';

export { REPORT as METHOD_NAME } from './constants';
export default function () {
  return function report() {
    if (Utils.checkInside(this.state.x, this.state.y, this.state.tableSize)) {
      console.log(`Output: ${this.state.x}, ${this.state.y}, ${this.state.f}`);
    }
  };
}
