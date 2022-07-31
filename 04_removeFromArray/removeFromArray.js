const removeFromArray = function(arr, ...args) {
    const toRemove = [...args];
    for (let arg of toRemove) {
        arr = arr.filter(item => item !== arg);
    };
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
