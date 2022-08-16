const fibonacci = function(num) {
  if (num < 0) {
    return 'OOPS';
  } else if (num <= 2) {
    return 1;
  } else {
    return fibonacci(num-2) + fibonacci(num-1);
  };
};

// Do not edit below this line
module.exports = fibonacci;
