/**
 * Calculate the factorial of a non-negative integer.
 * @param {number} number
 * @returns {number}
 */
function calculateFactorial(number) {
  if(number < 0){
    throw new Error('Number cannot be negative')
  } else if(number === undefined){
    throw new Error('Number cannot be undefined') 
  } else if(typeof number !== 'number')  {
    throw new Error('Argument must be a number')
  } else if(Math.round(number) !== number){
    throw new Error('Number must be an integer')
  } else {
      let result = 1;

      for (let current = 1; current <= number; current += 1) {
        result *= current;
      }

      return result;
  }

}

module.exports = calculateFactorial;
