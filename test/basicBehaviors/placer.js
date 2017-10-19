import { expect } from 'chai';
import { placer } from '/src/basicBehaviors';
import { METHOD_KEY } from '/src/basicBehaviors/constants';

describe('BASIC BEHAVIOR #place', function() {
  const method = placer[METHOD_KEY];

  it('should ignore insufficient arguments', function() {
    const context = {
      state: {},
    };

    const originalState = context.state;

    method.call(context);
    expect(context.state).to.equal(originalState);

    method.call(context, {});
    expect(context.state).to.equal(originalState);
  });

  it('should ignore bad position arguments', function() {
    const table = {
      size: 5,
    };

    const context = {
      state: {},
    };

    const originalState = context.state;

    method.call(context, { x: '1', y: '2', f: 'NORTH', table: table });
    expect(context.state).to.equal(originalState);

    method.call(context, { x: -1, y: 2, f: 'NORTH', table: table });
    expect(context.state).to.equal(originalState);
  });

  it('should ignore bad facing argument', function() {
    const table = {
      size: 5,
    };

    const context = {
      state: {},
    };

    const originalState = context.state;

    method.call(context, { x: 1, y: 2, f: 'N', table: table });
    expect(context.state).to.equal(originalState);
  });

  it('should ignore bad table argument', function() {
    const table = {};

    const context = {
      state: {},
    };

    const originalState = context.state;
    const props = { x: 1, y: 2, f: 'NORTH', table: table };

    method.call(context, props);
    expect(context.state).to.equal(originalState);

    table.size = 0;
    method.call(context, props);
    expect(context.state).to.equal(originalState);

    table.size = '5';
    method.call(context, props);
    expect(context.state).to.equal(originalState);
  });

  it('should ignore placing outside the table', function() {
    const table = {
      size: 5,
    };

    const context = {
      state: {},
    };

    const originalState = context.state;

    method.call(context, { x: 5, y: 0, f: 'NORTH', table: table });
    expect(context.state).to.equal(originalState);

    method.call(context, { x: 0, y: 5, f: 'NORTH', table: table });
    expect(context.state).to.equal(originalState);
  });

  it('should only update the necessary part of state when placing at valid position', function() {
    const table = {
      size: 5,
    };

    const context = {
      state: {
        shouldNotTouched: 'shouldNotTouched'
      },
    };

    const originalState = context.state;
    const x = 4;
    const y = 0;
    const f = 'NORTH';

    method.call(context, { x: x, y: y, f: f, table: table });
    expect(context.state).to.not.equal(originalState);
    expect(context.state.x).to.equal(x);
    expect(context.state.y).to.equal(y);
    expect(context.state.f).to.equal(f);
    expect(context.state.tableSize).to.equal(table.size);
    expect(context.state.shouldNotTouched).to.equal(originalState.shouldNotTouched);
  });
});
