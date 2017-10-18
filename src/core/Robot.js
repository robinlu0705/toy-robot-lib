import placer, { METHOD_NAME as PLACER_METHOD_NAME } from './baseMethodCreators/placer';
import reporter, { METHOD_NAME as REPORTER_METHOD_NAME } from './baseMethodCreators/reporter';
import mover, { METHOD_NAME as MOVER_METHOD_NAME } from './baseMethodCreators/mover';

export default function Robot() {
  this.state = {
    x: null,
    y: null,
    f: null,
    tableSize: null,
  };
}


Robot.prototype = {
  [PLACER_METHOD_NAME]: placer(),
  [REPORTER_METHOD_NAME]: reporter(),
  [MOVER_METHOD_NAME]: mover(),
};
