/**
 * Return basic information about a string.
 * Words are separated by spaces. Sentences end with ., !, or ?.
 * @param {string} str
 * @returns {{characters: number, words: number, sentences: number}}
 */
function analyzeText(str) {
  if(str === undefined){
    throw new Error('String cannot be undefined')
  }
  
  if(typeof str !== 'string'){
    throw new Error('Argument must be a string')
  }

  if(str.trim() === ''){
    return { characters: str.length, words: 0, sentences: 0 };
  }
  

  // Feedback: several text-analysis tests fail here. Splitting on a single
  // space counts repeated spaces as words, only "." is counted as a sentence
  // ending, and text without punctuation should still count as one sentence.
  return {
    characters: str.length,
    words: str.trim().split(' ').length,
    sentences: str.split('.').length - 1,
  };
}

module.exports = analyzeText;
