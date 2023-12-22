const repeatString = function(str, repeat) {
  if (repeat < 0) {
    return 'ERROR';
  } else if (repeat === 0) {
    return '';
  } else {
    let output = '';
    for (let i = 0; i < repeat; i++) {
      output += str;
    }
    return output;
  }
};

// Do not edit below this line
module.exports = repeatString;
