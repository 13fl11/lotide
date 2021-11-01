const tail = require('../tail');
const assertEqual = require('../assertEqual');


const words = [];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3);