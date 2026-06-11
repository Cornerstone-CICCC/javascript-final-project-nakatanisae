/**
 * Calculate the factorial of a non-negative integer.
 * @param {number} number
 * @returns {number}
 */
function calculateFactorial(number) {
  if(number < 0){
    return 'Number cannot be negative'
  } else if(number === 'string') {
    return 'Argument must be a number'
  } else if(number === ''){
    return 'Number cannot be undefined'
  } else if(number === number.round){
    return 'Number must be an integer'
  } else {
      let result = 1;

      for (let current = 1; current <= number; current += 1) {
        result *= current;
      }

      return result;
  }


}

module.exports = calculateFactorial;
