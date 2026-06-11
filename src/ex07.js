/**
 * Classify numbers as positive, negative, or zero.
 * @param {number[]} arr
 * @returns {{positive: number[], negative: number[], zero: number[]}}
 */
function classifyNumbers(arr) {
  if(arr === 'undifined'){
    return 'Array cannot be undefined'
  } else if(arr.includes('null')){
    return 'Array can only contain numbers'
  } else if(!Array.isArray(arr)){
    return 'Argument must be an array'
  }{
    
    return {
      positive: arr.filter((number) => number > 0),
      negative: arr.filter((number) => number < 0),
      zero: arr.filter((number) => number === 0),
    };
}}

module.exports = classifyNumbers;
