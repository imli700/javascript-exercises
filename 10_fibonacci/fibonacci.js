function fibonacci(n) {
  if (n <= 0) {
    return 0; // Since Fibonacci sequence index you're using starts at 1
  }
  let a = 1, b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}

// Do not edit below this line
module.exports = fibonacci;
