/**
 * Return a new array containing only the even numbers.
 * @param {number[]} arr
 * @returns {number[]}
 */
function filterEvenNumbers(arr) {
  if(arr.includes('')){
    return 'Array cannot be undefined'
  } else if(arr.includes('string')){
    return 'Array can only contain numbers'
  } else {
    return arr.filter((number) => number % 2 === 0);
  }

  
}

module.exports = filterEvenNumbers;
