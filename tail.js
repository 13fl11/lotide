//const assertEqual = require('./assertEqual');

const tail = function(arr) {
  let output = [];
  for (let i = 1; i < arr.length; i++) {
    output.push(arr[i]);
  }
  console.log(output);
  return output;
};

module.exports = tail;