/**
 * Find the maximum number in an array of numbers
 * @param {number[]} arr
 * @returns {number}
 */
function findMax(arr) {
  if(arr === undefined){
    throw new Error('Array cannot be undefined')
  } else if(!Array.isArray(arr)){
    throw new Error('Argument must be an array')
  } else if (arr.length <= 0){
    throw new Error('Array cannot be empty')
  } 

  arr.forEach((item) => {
    if(typeof item !== 'number'){
      throw new Error('Array can only contain numbers')
    }
  })

  let largestNum = arr[0]
  
  for(let i = 0; i <= arr.length; i++){
    if(largestNum < arr[i]){
      largestNum = arr[i]
    } 
  }
  return largestNum
    
  }
    
    


  

module.exports = findMax;
