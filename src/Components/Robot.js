import { assemble, placer, reporter, mover, lefter, righter } from '../basicBehaviors';

export default function Robot() {
  this.state = {
    x: null,
    y: null,
    f: null,
    tableSize: null,
  };
}


Robot.prototype = assemble(
  placer,
  reporter,
  mover,
  lefter,
  righter,
);
