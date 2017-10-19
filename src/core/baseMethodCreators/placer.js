import Utils from './Utils';

const validFacing = ['NORTH', 'EAST', 'SOUTH', 'WEST'];

function checkProps(props) {
  if (!props
    || !Number.isInteger(props.x)
    || props.x < 0
    || !Number.isInteger(props.y)
    || props.y < 0
    || validFacing.indexOf(props.f) === -1
    || !props.table
    || !Number.isInteger(props.table.size)
    || props.table.size <= 0
  ) {
    return false;
  }

  return true;
}

export { PLACE as METHOD_NAME } from './constants';
export default function () {
  return function place(props) {
    if (checkProps(props) && Utils.checkInside(props.x, props.y, props.table.size)) {
      this.state = {
        ...this.state,
        x: props.x,
        y: props.y,
        f: props.f,
        tableSize: props.table.size,
      };
    }
  };
}
