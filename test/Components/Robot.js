import { expect } from 'chai';
import sinon from 'sinon';
import Robot from '/src/Components/Robot';

describe('Robot', function() {
  it('should be created with a default state', function() {
    const robot = new Robot();

    expect(robot.state).to.not.be.empty;
    expect(robot.state.x).to.be.null;
    expect(robot.state.y).to.be.null;
    expect(robot.state.f).to.be.null;
    expect(robot.state.tableSize).to.be.null;
  });

  it('should have some base methods including #place, #report, #move, #left, #right', function() {
    const robot = new Robot();

    expect(robot.place).to.be.a('function');
    expect(robot.report).to.be.a('function');
    expect(robot.move).to.be.a('function');
    expect(robot.left).to.be.a('function');
    expect(robot.right).to.be.a('function');
  });

  it('should be able to create multiple robot instances', function() {
    const robot = new Robot();
    const robot2 = new Robot();

    expect(robot).to.not.equal(robot2);
    expect(robot.state).to.not.equal(robot2.state);
  });
});
