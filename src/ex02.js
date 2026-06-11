/**
 * Add all numbers in an array.
 * @param {number[]} arr
 * @returns {number}
 */
function sumArray(arr) {
    if(arr === undefined){
      throw new Error('Array cannot be undefined')
    } else if(!Array.isArray(arr)){
      throw new Error('Argument must be an array')
    } else {
      return arr.reduce((total, number) => {
        if(typeof number !== 'number'){
          throw new Error('Array can only contain numbers')
        }
       return total + number}, 0);
    }
  
}

module.exports = sumArray;
