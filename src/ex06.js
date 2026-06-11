/**
 * Count the vowels in a string.
 * @param {string} str
 * @returns {number}
 */
function countVowels(str) {
  const vowels = 'aeiou';

  if(str === ''){
    return 'String cannot be undefined'
  } else if(Array.isArray(str)) {
    return 'Argument must be a string'
  } else {
    return str
    .toLowerCase()
    .split('')
    .filter((character) => vowels.includes(character)).length;
  }
    
  }

  

  


module.exports = countVowels;
