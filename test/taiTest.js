const assert = require('chai').assert;
const tail = require('../tail');
//const assertEqual = require('../assertEqual');

describe("#tail", () => {
  it("returns ['ligthouse','labs'] for ['hello', 'ligthouse', 'labs']", () => {
    assert.deepEqual(tail(['hello', 'ligthouse', 'labs']), ['ligthouse','labs']);
  });
  it("returns nothing for []", () => {
    assert.deepEqual(tail([]), []); 
  });
});

//const words = [love];
//tail(words); // no need to capture the return value since we are not checking it
//assertEqual(words.length, 3);