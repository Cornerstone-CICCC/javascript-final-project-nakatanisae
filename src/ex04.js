/**
 * Calculate the average of an array of numbers.
 * @param {number[]} arr
 * @returns {number}
 */
function calculateAverage(arr) {
  if(arr === undefined){
    throw new Error('Array cannot be undefined')
  } else if(!Array.isArray(arr)){
    throw new Error('Argument must be an array')
  } else if(arr.length === 0){
    throw new Error('Array cannot be empty')
  }
  const total = arr.reduce((sum, number) => {
    if(typeof number !== 'number'){
      throw new Error('Array can only contain numbers')
    }
  return sum + number}, 0);
  return total / arr.length;
}

module.exports = calculateAverage;
