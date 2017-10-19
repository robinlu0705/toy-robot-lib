import { expect } from 'chai';
import sinon from 'sinon';
import Table from '/src/Components/Table';

describe('Table', function() {
  it('should be created with a default size 5', function() {
    const table = new Table();

    expect(table.size).to.equal(5);
  });

  it('should be created with the size given', function() {
    const table = new Table(11);

    expect(table.size).to.equal(11);
  });

  it('should be able to create multiple table instances', function() {
    const table = new Table(3);
    const table2 = new Table(7);

    expect(table).to.not.equal(table2);
    expect(table.size).to.not.equal(table2.size);
  });
});
