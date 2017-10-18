import { expect } from 'chai';
import righter from '/src/core/baseMethodCreators/righter';

describe('BASE METHOD #right', function() {
  const method = righter();

  it('should not turn if it has not been place on table yet', function() {
    const context = {
      state: {
        x: null,
        y: null,
        f: null,
        tableSize: null,
      },
    };

    const originalState = context.state;

    method.call(context);
    expect(context.state).to.equal(originalState);
  });

  it('should turn to (2,2,EAST) from (2,2,NORTH) on a 5x5 table', function() {
    const context = {
      state: {
        x: 2,
        y: 2,
        f: 'NORTH',
        tableSize: 5,
      },
    };

    const originalState = context.state;

    method.call(context);
    expect(context.state).to.not.equal(originalState);
    expect(context.state.x).to.equal(2);
    expect(context.state.y).to.equal(2);
    expect(context.state.f).to.equal('EAST');
    expect(context.state.tableSize).to.equal(5);
  });

  it('should turn to (2,2,SOUTH) from (2,2,EAST) on a 5x5 table', function() {
    const context = {
      state: {
        x: 2,
        y: 2,
        f: 'EAST',
        tableSize: 5,
      },
    };

    const originalState = context.state;

    method.call(context);
    expect(context.state).to.not.equal(originalState);
    expect(context.state.x).to.equal(2);
    expect(context.state.y).to.equal(2);
    expect(context.state.f).to.equal('SOUTH');
    expect(context.state.tableSize).to.equal(5);
  });

  it('should turn to (2,2,WEST) from (2,2,SOUTH) on a 5x5 table', function() {
    const context = {
      state: {
        x: 2,
        y: 2,
        f: 'SOUTH',
        tableSize: 5,
      },
    };

    const originalState = context.state;

    method.call(context);
    expect(context.state).to.not.equal(originalState);
    expect(context.state.x).to.equal(2);
    expect(context.state.y).to.equal(2);
    expect(context.state.f).to.equal('WEST');
    expect(context.state.tableSize).to.equal(5);
  });

  it('should turn to (2,2,NORTH) from (2,2,WEST) on a 5x5 table', function() {
    const context = {
      state: {
        x: 2,
        y: 2,
        f: 'WEST',
        tableSize: 5,
      },
    };

    const originalState = context.state;

    method.call(context);
    expect(context.state).to.not.equal(originalState);
    expect(context.state.x).to.equal(2);
    expect(context.state.y).to.equal(2);
    expect(context.state.f).to.equal('NORTH');
    expect(context.state.tableSize).to.equal(5);
  });
});
