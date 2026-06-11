/**
 * Capitalize the first letter of every word in a string.
 * @param {string} str
 * @returns {string}
 */
function capitalizeWords(str) {
  if(str === ''){
    return ''
  } else if(str === undefined){
    throw new Error('String cannot be undefined') 
  } else if(typeof str !== 'string'){
    throw new Error('Argument must be a string')
  }{
    return str
    .replace('   ', ' ')
    .trim()
    .toLowerCase()
    .split(' ')
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(' ');
  }
  
}

module.exports = capitalizeWords;
