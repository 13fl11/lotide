// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     let output1 = actual + ' === ' + expected;
//     console.log(`✅✅✅ Assertion Passed:  ${output1}`);
//   } else {
//     let output2 = actual + ' !== ' + expected;
//     console.log(`🛑🛑🛑 Assertion Failed:  ${output2}`);
//   }
// };

const assertEqual = require('./assertEqual');

const head = function (actual) {
 return actual[0];
};

//assertEqual(head([5,6,7]), 5);
//assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

// TEST CODE
//assertEqual("Lighthouse Labs", "Bootcamp");
//assertEqual(1, 1);

module.exports = head;