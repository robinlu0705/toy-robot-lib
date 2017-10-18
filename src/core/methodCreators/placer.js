export { PLACE as METHOD_NAME } from './constants';

export default function() {
  return function(props)  {
    this.state = {
      ...this.state,
      x: props.x,
      y: props.y,
      f: props.f,
      tableSize: props.table.size,
    };
  };
}
