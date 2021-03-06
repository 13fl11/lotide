const assert = require('chai').assert;
const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

describe("#middle", () => {
  it("returns [1] for []", () => {
    assert.deepEqual(middle([]), []); 
  });

  it("returns [1, 2] for []", () => {
    assert.deepEqual(middle([1, 2]), []); 
  });

  it("returns [1, 2, 3] for [2]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]); 
  });

  it("returns [1, 2, 3, 4, 5] for [3]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]); 
  });
  it("returns [1, 2, 3, 4] for [3]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2,3]); 
  });
  it("returns [1, 2, 3, 4, 5, 6] for [3]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3,4]); 
  });

});

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1,2]), []);
assertArraysEqual(middle([1,2,3]), [2]);
assertArraysEqual(middle([1,2,3,4,5]), [3]);
assertArraysEqual(middle([1,2,3,4]), [2,3]);
assertArraysEqual(middle([1,2,3,4,5,6]), [3,4]);