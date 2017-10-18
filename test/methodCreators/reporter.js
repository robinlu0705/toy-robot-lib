import { expect } from 'chai';
import sinon from 'sinon';
import reporter from '/src/core/baseMethodCreators/reporter';

describe('BASE METHOD #report', function() {
  const method = reporter();

  beforeEach(function() {
    sinon.spy(console, 'log');
  });

  afterEach(function () {
    console.log.restore();
  });

  it('should do nothing if the robot has not been placed on a table yet', function() {
    const context = {
      state: {},
    };

    const originalState = context.state;

    method.call(context);
    expect(context.state).to.equal(originalState);
    expect(console.log.called).to.be.false;
  });

  it('should call console.log once but not change the state if the robot is placed on a table', function() {
    const context = {
      state: {
        x: 3,
        y: 2,
        f: 'WEST',
        tableSize: 5,
      },
    };

    const originalState = context.state;

    method.call(context);
    expect(context.state).to.equal(originalState);
    expect(console.log.called).to.be.true;
  });
});
