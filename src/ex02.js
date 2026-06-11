/**
 * Add all numbers in an array.
 * @param {number[]} arr
 * @returns {number}
 */
function sumArray(arr) {
    if(arr === 'undifined'){
      return 'Array cannot be undefined'
    } else {
      return arr.reduce((total, number) => total + number, 0);
    }
    
  
  
}

module.exports = sumArray;
