/**
 * Capitalize the first letter of every word in a string.
 * @param {string} str
 * @returns {string}
 */
function capitalizeWords(str) {
  if(str === ''){
    return ''
  } else if(str === 'undefined'){
    return 'String cannot be undefined'
  }{
    return str
    .trim()
    .replace('   ', ' ')
    .toLowerCase()
    .split(' ')
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(' ');
  }
  
}

module.exports = capitalizeWords;
