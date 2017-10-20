const expect = require('chai').expect;
const sinon = require('sinon');
const functions = require('../functions.js');

describe('node-cli method #unrecognizedTestFileCommandPrompt', function() {
  const method = functions.unrecognizedTestFileCommandPrompt;

  it('should call console.error and process.exit when invoked', function() {
    const errorStub = sinon.stub(console, 'error');
    const exitStub = sinon.stub(process, 'exit');

    method();
    expect(errorStub.called).to.be.true;
    expect(exitStub.called).to.be.true;

    errorStub.restore();
    exitStub.restore();
  });
});

describe('node-cli method #checkComment', function() {
  const method = functions.checkComment;

  it(`should return true if the line starts with a '#'`, function() {
    expect(method('#')).to.be.true;
  });

  it(`should return false if the line starts with anything other than '#'`, function() {
    expect(method('!')).to.be.false;
    expect(method('')).to.be.false;
    expect(method('//')).to.be.false;
  });
});

describe('node-cli method #parseLine', function() {
  const method = functions.parseLine;
  const commandSet = {
    A: 'A',
    B: 'B',
  };

  it(`should return empty array if the line doesn't start with any command given by the command set`, function() {
    expect(method(commandSet, 'C xx')).to.be.empty;
    expect(method(commandSet, 'Dxx')).to.be.empty;
  });

  it(`should return an array with 2 elements, array[0] is the command and array[1] is the remaining of the line if the line starts with the command in the command set`, function() {
    const result1 = method(commandSet, 'A 1,2,3');

    expect(result1).to.have.lengthOf(2);
    expect(result1[0]).to.equal('A');
    expect(result1[1]).to.equal(' 1,2,3');

    const result2 = method(commandSet, 'B');

    expect(result2).to.have.lengthOf(2);
    expect(result2[0]).to.equal('B');
    expect(result2[1]).to.equal('');
  });
});

describe('node-cli method #cleanCommandArgString', function() {
  const method = functions.cleanCommandArgString;

  it(`should return a string as same as the input but without any space`, function() {
    expect(method(' A B C ')).to.equal('ABC');
    expect(method('')).to.equal('');
    expect(method('ABC')).to.equal('ABC');
  });
});

describe('node-cli method #parsePlaceCommandArgs', function() {
  const method = functions.parsePlaceCommandArgs;

  it(`should return null if the input is not in the correct format`, function() {
    expect(method('')).to.be.null;
    expect(method('1,-,EAST')).to.be.null;
    expect(method('-,1,EAST')).to.be.null;
    expect(method('1,1,east')).to.be.null;
  });

  it(`should return an object contains x:number, y:number, f:string if the input is in the correct format`, function() {
    const result1 = method('10,11,NORTH');

    expect(result1).to.have.property('x', 10);
    expect(result1).to.have.property('y', 11);
    expect(result1).to.have.property('f', 'NORTH');

    const result2 = method('0,0,EAST');

    expect(result2).to.have.property('x', 0);
    expect(result2).to.have.property('y', 0);
    expect(result2).to.have.property('f', 'EAST');

    const result3 = method('03, 01, SOUTH');

    expect(result3).to.have.property('x', 3);
    expect(result3).to.have.property('y', 1);
    expect(result3).to.have.property('f', 'SOUTH');

    const result4 = method('   3, 1, WEST       ');

    expect(result4).to.have.property('x', 3);
    expect(result4).to.have.property('y', 1);
    expect(result4).to.have.property('f', 'WEST');
  });
});

describe('node-cli method #operate', function() {
  const method = functions.operate;
  it(`should invoke first argument's method if the method has the same name as the second argument`, function() {
    const context = {
      a: sinon.spy(),
    };

    method(context, 'A');
    expect(context.a.called).to.be.true;
  });

  it(`should invoke first argument's method with the args provided by argument3`, function() {
    const context = {
      a: sinon.spy(),
    };

    method(context, 'a', 'args');
    expect(context.a.getCall(0).args[0]).to.equal('args');
  });

  it(`should do nothing if there is no method in argument1 has the same name as argument2`, function() {
    const context = {
      a: sinon.spy(),
    };

    method(context, 'b');
    expect(context.a.called).to.false;
  });
});
