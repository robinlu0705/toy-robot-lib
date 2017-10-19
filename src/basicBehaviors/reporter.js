import { REPORT, NAME_KEY, METHOD_KEY } from './constants';
import Utils from './Utils';

export default {
  [NAME_KEY]: REPORT,
  [METHOD_KEY]() {
    if (Utils.checkInside(this.state.x, this.state.y, this.state.tableSize)) {
      console.log(`Output: ${this.state.x},${this.state.y},${this.state.f}`);
    }
  },
};
