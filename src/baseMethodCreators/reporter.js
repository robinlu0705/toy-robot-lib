import { REPORT as BEHAVIOR_NAME } from './constants';
import Utils from './Utils';

export default {
  BEHAVIOR_NAME,
  behavior() {
    if (Utils.checkInside(this.state.x, this.state.y, this.state.tableSize)) {
      console.log(`Output: ${this.state.x},${this.state.y},${this.state.f}`);
    }
  },
};
