import { expect } from 'chai';
import Utils from '/src/basicBehaviors/Utils';
import { NAME_KEY, METHOD_KEY } from '/src/basicBehaviors/constants'

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

describe('Util function #assemble', function() {
  const method = Utils.assemble;

  it('should return empty object if insufficient arguments', function() {
    expect(method()).to.be.empty;
  });

  it('should only process arguments with both property BEHAVIOR_NAME:string and behavior:function', function() {
    const arg1 = {
      [NAME_KEY]: 'arg1',
      [METHOD_KEY]: function() {},
    };

    const arg2 = {
      SHOULD_NOT_BE_PROCESSED: 'arg2',
      [METHOD_KEY]: function() {},
    };

    const arg3 = {
      [NAME_KEY]: 'arg3',
      [METHOD_KEY]: 'wrong type'
    };

    const arg4 = {
      [NAME_KEY]: 'arg4',
      [METHOD_KEY]: function() {},
    };

    const comp = method(arg1, arg2, arg3, arg4);

    expect(Object.keys(comp)).to.have.lengthOf(2);
    expect(comp).to.have.own.property(arg1[NAME_KEY], arg1[METHOD_KEY]);
    expect(comp).to.have.own.property(arg4[NAME_KEY], arg4[METHOD_KEY]);
  });
});
