const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(a) {
	return a.reduce((sum, num) => sum + num,0);
};

const multiply = function(a) {
  return a.reduce((multi, num) => (a.length > 0) ? multi * num : 0, 1);
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(a) {
  (a > 0) ? result = [...Array(a+1).keys()].slice(1).reduce((multi, num) => multi * num, 1) : result = 1;
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
