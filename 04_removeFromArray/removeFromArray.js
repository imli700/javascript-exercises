const removeFromArray = function(originalArray, ...toRemove) {
  let intervalsLeft = originalArray.length;

  for (let i = 0; i < toRemove.length; i++) {
    for (let j = 0; j < intervalsLeft; j++) {
      if (toRemove[i] === originalArray[j]) {
        originalArray.splice(j, 1);
        intervalsLeft--;
        break;
      }
    }
  }

  return originalArray;
};

// Do not edit below this line
module.exports = removeFromArray;
