export { REPORT as METHOD_NAME } from './constants';

export default function() {
  return function() {
    console.log(`Output: ${this.state.x}, ${this.state.y}, ${this.state.f}`);
  };
}
