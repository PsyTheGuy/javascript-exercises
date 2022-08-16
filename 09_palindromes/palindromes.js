const palindromes = function (text) {
  let string = text.split(' ').map(word => word.replace(/\W/g, ' ').trim().toLowerCase()).join('');
  for (let i = 0; i < Math.floor(string.length / 2); i++) {
    if (string.charAt(i) === string.charAt(string.length-1-i)) {
      continue;
    } else {
      return false;
    };
  };
  return true;
};

// Do not edit below this line
module.exports = palindromes;
