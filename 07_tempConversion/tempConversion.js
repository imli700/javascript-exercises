const convertToCelsius = function(fahrenheit) {
  let result = Number((5 / 9 * (fahrenheit - 32)).toFixed(1));
  return result;
}
const convertToFahrenheit = function(celsius) {
  let result = Number((9 / 5 * celsius + 32).toFixed((1)))
  return result;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
