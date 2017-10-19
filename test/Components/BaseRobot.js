import { expect } from 'chai';
import BaseRobot from '/src/Components/BaseRobot';
import { NAME_KEY, METHOD_KEY } from '/src/basicBehaviors/constants'


describe(`BaseRobot's method #assemble`, function() {
  const method = BaseRobot.prototype.assemble;

  it('should ignore insufficient arguments', function() {
    const context = {};

    method.call(context);

    expect(context).to.be.empty;
  });

  it('should only process arguments with both property [NAME_KEY]:string and [METHOD_KEY]:function', function() {
    const context = {};
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

    method.call(context, arg1, arg2, arg3, arg4);

    expect(Object.keys(context)).to.have.lengthOf(2);
    expect(context).to.have.own.property(arg1[NAME_KEY], arg1[METHOD_KEY]);
    expect(context).to.have.own.property(arg4[NAME_KEY], arg4[METHOD_KEY]);
  });
});
