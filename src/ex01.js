/**
 * Find the maximum number in an array of numbers
 * @param {number[]} arr
 * @returns {number}
 */
function findMax(arr) {
  let largestNum = arr[i]
  const secondLargestNum = arr[i + 1]
  for(let i = 0; i <= arr.length; i++)
    if(largestNum > secondLargestNum){
      return largestNum
    } else {
      return largestNum = secondLargestNum
    }
      
    

  if (arr.length <= 0) throw new Error('Array cannot be empty');

  return arr[0];
}

module.exports = findMax;
