const palindromes = function(string) {
  let arrayed = Array.from(string);

  // return cleaned string
  let cleaned = arrayed.reduce((acc, current) => {
    if (isLetterOrNumber(current)) {
      return acc + current.toLowerCase();
    } else {
      return acc + "";
    }
  }, "")

  let cleanedReversed = reverseString(cleaned);

  if (cleaned === cleanedReversed) return true;
  else return false;

};

function reverseString(string) {
  let reversed = "";

  for (let i = (string.length - 1); i >= 0; i--) {
    reversed += string[i];
  }
  return reversed;
}

function isLetterOrNumber(character) {
  return /^[A-Za-z0-9]$/.test(character);
}

// Do not edit below this line
module.exports = palindromes;
