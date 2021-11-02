# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @13fl11/lotide`

**Require it:**

`const _ = require('@13fl11/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:


* `head()`: returns the first element of an array
* `tail()`: returns a new array that contains all the elements of an inputted array expect for index0 `("the head of the inputted array")`
* `assertEqual()`: returns a message for assertion pass or fail based on two arguments actual, expected
* `eqArrays()`: returns assertion after comparing two arrays `(utilitzes assertEqual() for assertion)`
* `assertArraysEqual()`: returns a console.log with appropriate assert message after comparing two arrays
* `assertObjectsEqual()`: prints an assertion method after comparing two objects
* `countLetters()`: returns an object that is the result of counting letters in a sentence `(no spaces)`
* `countOnly()`:  returns an object that is the result of counting certain items in an array `(based on criteria listed in another object)`
* `findKey()`: returns key
* `findKeyValue()`: returns the name of the key that contains the value that is the same as an inputted one
* `letterPositions()`: returns an object that contains keys (letters in sentence) and values `(indexes in which they appear in sentence)`
* `map()`: loops over elements of an array, uses each element as a parameter for a CB function, pushes item into a new array
* `middle()`: returns the middle element`(s)` of an array `(as an array; also contains assertion message)`
* `takeUntil()`:  returns elements in an array until the callback`(element)` is true.
* `without()`: returns a new array after removing items from a source array `(takes in two arrays as parameters/arguments)`


