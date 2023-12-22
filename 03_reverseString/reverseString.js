const reverseString = function(toReverse) {
  const brokenDown = toReverse.split('');
  let lastIndex = brokenDown.length - 1;
  let reversedString = '';

  for (; lastIndex >= 0; lastIndex--) {
    reversedString += toReverse[lastIndex];
  }
  return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
