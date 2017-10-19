import { expect } from 'chai';
import { mover } from '/src/basicBehaviors';

describe('BASIC BEHAVIOR #move', function() {
  const method = mover.behavior;

  it('should not move if it has not been place on table yet', function() {
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

  it('should not move outside the 5x5 table @ (0,0,WEST)', function() {
    const context = {
      state: {
        x: 0,
        y: 0,
        f: 'WEST',
        tableSize: 5,
      },
    };

    const originalState = context.state;

    method.call(context);
    expect(context.state).to.equal(originalState);
  });

  it('should not move outside the 5x5 table @ (0,0,SOUTH)', function() {
    const context = {
      state: {
        x: 0,
        y: 0,
        f: 'SOUTH',
        tableSize: 5,
      },
    };

    const originalState = context.state;

    method.call(context);
    expect(context.state).to.equal(originalState);
  });

  it('should not move outside the 3x3 table @ (2,2,EAST)', function() {
    const context = {
      state: {
        x: 2,
        y: 2,
        f: 'EAST',
        tableSize: 3,
      },
    };

    const originalState = context.state;

    method.call(context);
    expect(context.state).to.equal(originalState);
  });

  it('should not move outside the 3x3 table @ (2,2,NORTH)', function() {
    const context = {
      state: {
        x: 2,
        y: 2,
        f: 'NORTH',
        tableSize: 3,
      },
    };

    const originalState = context.state;

    method.call(context);
    expect(context.state).to.equal(originalState);
  });

  it('should not move outside the 7x7 table @ (0,6,NORTH)', function() {
    const context = {
      state: {
        x: 0,
        y: 6,
        f: 'NORTH',
        tableSize: 7,
      },
    };

    const originalState = context.state;

    method.call(context);
    expect(context.state).to.equal(originalState);
  });

  it('should not move outside the 7x7 table @ (0,6,WEST)', function() {
    const context = {
      state: {
        x: 0,
        y: 6,
        f: 'WEST',
        tableSize: 7,
      },
    };

    const originalState = context.state;

    method.call(context);
    expect(context.state).to.equal(originalState);
  });

  it('should not move outside the 4x4 table @ (3,0,EAST)', function() {
    const context = {
      state: {
        x: 3,
        y: 0,
        f: 'EAST',
        tableSize: 4,
      },
    };

    const originalState = context.state;

    method.call(context);
    expect(context.state).to.equal(originalState);
  });

  it('should not move outside the 4x4 table @ (3,0,SOUTH)', function() {
    const context = {
      state: {
        x: 3,
        y: 0,
        f: 'SOUTH',
        tableSize: 4,
      },
    };

    const originalState = context.state;

    method.call(context);
    expect(context.state).to.equal(originalState);
  });

  it('should move to (2,3,NORTH) from (2,2,NORTH) on a 5x5 table', function() {
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
    expect(context.state.y).to.equal(3);
    expect(context.state.f).to.equal('NORTH');
    expect(context.state.tableSize).to.equal(5);
  });

  it('should move to (3,2,EAST) from (2,2,EAST) on a 5x5 table', function() {
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
    expect(context.state.x).to.equal(3);
    expect(context.state.y).to.equal(2);
    expect(context.state.f).to.equal('EAST');
    expect(context.state.tableSize).to.equal(5);
  });

  it('should move to (2,1,SOUTH) from (2,2,SOUTH) on a 5x5 table', function() {
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
    expect(context.state.y).to.equal(1);
    expect(context.state.f).to.equal('SOUTH');
    expect(context.state.tableSize).to.equal(5);
  });

  it('should move to (1,2,WEST) from (2,2,WEST) on a 5x5 table', function() {
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
    expect(context.state.x).to.equal(1);
    expect(context.state.y).to.equal(2);
    expect(context.state.f).to.equal('WEST');
    expect(context.state.tableSize).to.equal(5);
  });
});
