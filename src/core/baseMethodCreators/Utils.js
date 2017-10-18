export default {
  checkInside(x, y, size) {
    if (!Number.isInteger(x)
      || !Number.isInteger(y)
      || !Number.isInteger(size)
      || x < 0
      || x >= size
      || y < 0
      || y >= size
    ) {
      return false;
    } else {
      return true;
    }
  }
}
