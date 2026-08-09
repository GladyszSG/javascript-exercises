function removeFromArray(arr, ...argument) {
    for (let i = 0; i < argument.length; i++) {
        while (arr.includes(argument[i]) == true) {
            arr.splice(arr.indexOf(argument[i]), 1);
        }
    };
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
