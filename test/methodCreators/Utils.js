import { expect } from 'chai';
import Utils from '/src/core/baseMethodCreators/Utils';

describe('Util function #checkInside', function() {
  const method = Utils.checkInside;

  it('should return false if insufficient arguments', function() {
    expect(method()).to.be.false;
    expect(method(1)).to.be.false;
    expect(method(1, 1)).to.be.false;
  });

  it('should return false if any of the arguments is not integer', function() {
    expect(method(1, '2', 3)).to.be.false;
    expect(method(1, 2, '3')).to.be.false;
    expect(method('1', 2, 3)).to.be.false;
  });

  it('should return false if the size <= 0', function() {
    expect(method(0, 0, 0)).to.be.false;
  });

  it('should return false if the position is not inside the area', function() {
    expect(method(3, 3, 3)).to.be.false;
    expect(method(-1, -2, 3)).to.be.false;
    expect(method(4, 3, 1)).to.be.false;
  });

  it('should return true if the position is inside the area', function() {
    expect(method(1, 1, 3)).to.be.true;
    expect(method(2, 2, 3)).to.be.true;
    expect(method(0, 0, 1)).to.be.true;
  });
});
