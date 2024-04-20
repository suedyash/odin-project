const palindromes = function (string) {
  const validCharacters = 'abcdefghijklmnopqrstuvwxyz0123456789';

  const cleanedString = string
    .toLowerCase()
    .split('')
    .filter((character) => validCharacters.includes(character))
    .join('');

  const reversedString = cleanedString.split('').reverse().join('');

  return cleanedString === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
