/* jshint esversion: 6 */
/**
 * Build a function that finds the smallest positive number that is evenly
 * divisible by all of the numbers starting from 1 up to the value passed into your function.
 *
 * @param  { Number } ceiling This value will serve as your ceiling.
 * @return { Number }         Lowest Positive Number that is evenly divisible by all numbers
 *                            between 1 and `ceiling`
 */
module.exports = function( ceiling ) {
  // do work here
  var num = 0;
  var div = true;
  while (true) {
    div = true;
    num += ceiling;
    for (var i = 2; i < ceiling; i++) {
      if (num % i !== 0) {
        div = false;
        break;
      }
    }
    if (div === true) {
      break;
    }
  }

  return num;
};