import placer, { METHOD_NAME as PLACER_METHOD_NAME, initialState as placerInitialState } from './methodCreators/placer';
import reporter, { METHOD_NAME as REPORTER_METHOD_NAME, initialState as reporterInitialState } from './methodCreators/reporter';

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
};
