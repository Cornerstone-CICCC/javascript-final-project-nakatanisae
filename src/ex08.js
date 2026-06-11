/**
 * Return the strings that contain the keyword.
 * The search should be case-insensitive.
 * @param {string[]} arr
 * @param {string} keyword
 * @returns {string[]}
 */


function search(arr, keyword) {
  
  if(arr === undefined){
    throw new Error('Array cannot be undefined')
  } else if(keyword === undefined){
    throw new Error('Keyword cannot be undefined')
  }else if(!Array.isArray(arr)){
    throw new Error('Argument must be an array')
  } else if (typeof keyword !== 'string'){
    throw new Error('Keyword must be a string')
  } 
  
  const lowerCaseKeyword = keyword.toLowerCase()

  arr.forEach((char) => {
    if(typeof char !== 'string'){
      throw new Error('Array can only contain strings')
    }
  });
  return arr.filter((item) => item.toLowerCase().includes(lowerCaseKeyword));
    
  
}

module.exports = search;
