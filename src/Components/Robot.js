import { placer, reporter, mover, lefter, righter } from '../baseMethodCreators';

export default function Robot() {
  this.state = {
    x: null,
    y: null,
    f: null,
    tableSize: null,
  };
}


Robot.prototype = {
  [placer.BEHAVIOR_NAME]: placer.behavior,
  [reporter.BEHAVIOR_NAME]: reporter.behavior,
  [mover.BEHAVIOR_NAME]: mover.behavior,
  [lefter.BEHAVIOR_NAME]: lefter.behavior,
  [righter.BEHAVIOR_NAME]: righter.behavior,
};
