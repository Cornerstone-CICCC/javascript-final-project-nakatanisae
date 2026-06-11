/**
 * Return a new array containing only the even numbers.
 * @param {number[]} arr
 * @returns {number[]}
 */
function filterEvenNumbers(arr) {
  if(arr === undefined){
    throw new Error('Array cannot be undefined')
  } else if(!Array.isArray(arr)){
    throw new Error('Argument must be an array')
  } else {
    return arr.filter((number) => {
      if(typeof number !== 'number'){
        throw new Error('Array can only contain numbers')
      }
    
    return number % 2 === 0});
  }

  
}

module.exports = filterEvenNumbers;
