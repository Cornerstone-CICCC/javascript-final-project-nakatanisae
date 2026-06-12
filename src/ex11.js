/**
 * Rotate the values in an array to the right.
 * Negative positions rotate the array to the left.
 * @param {Array} arr
 * @param {number} positions
 * @returns {Array}
 */
function rotateArray(arr, positions) {
  if(arr === undefined){
    throw new Error('Array cannot be undefined')
  } 
  else if(positions === undefined){
    throw new Error('Positions cannot be undefined')
  }
  else if(!Array.isArray(arr)){
    throw new Error('Argument must be an array')
  }
  else if(typeof positions !== 'number'){
    throw new Error('Positions must be a number')
  }
  else if(!Number.isInteger(positions)){
    throw new Error('Positions must be an integer')
  }
  else if(arr.length === 0){
    return [];
  }

  const splitIndex = arr.length - positions;
  return [...arr.slice(splitIndex), ...arr.slice(0, splitIndex)];
}

module.exports = rotateArray;
