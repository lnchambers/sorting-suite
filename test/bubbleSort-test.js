assert = require('chai').assert;
const sort = require('../lib/bubbleSort');


describe('sort', function () {
  context('sort function', function () {
    it('it can sort an array of two numbers', function () {
      assert.deepEqual(sort([2, 1]), [1, 2])
    });
    it('it can sort an array of five numbers', function () {
      assert.deepEqual(sort([3, 2, 4, 5, 1]), [1, 2, 3, 4, 5])
    });
  });
});
