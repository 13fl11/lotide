// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    let output1 = actual + ' === ' + expected;
    console.log('✅✅✅' + 'Assertion Passed: ' + output1);
  } else {
    let output2 = actual + ' !== ' + expected;
    console.log('🛑🛑🛑' + 'Assertion Failed: ' + output2);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);