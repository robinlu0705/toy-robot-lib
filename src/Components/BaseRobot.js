import { NAME_KEY, METHOD_KEY } from '../basicBehaviors/constants';

export default class BaseRobot {
  constructor() {
    this.state = {
      x: null,
      y: null,
      f: null,
      tableSize: null,
    };
  }

  assemble(...args) {
    args.forEach((arg) => {
      if (arg[NAME_KEY] && typeof arg[METHOD_KEY] === 'function') {
        this[arg[NAME_KEY]] = arg[METHOD_KEY];
      }
    });
  }
}
