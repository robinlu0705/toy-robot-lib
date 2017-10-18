import Utils from './Utils';

export { REPORT as METHOD_NAME } from './constants';
export default function() {
  return function() {
    if (Utils.checkInside(this.state.x, this.state.y, this.state.size)) {
      console.log(`Output: ${this.state.x}, ${this.state.y}, ${this.state.f}`);
    }
  };
}
