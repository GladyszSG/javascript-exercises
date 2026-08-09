function sumAll(start, end) {
    if (Number.isInteger(start) == false || Number.isInteger(end) == false || start < 0 || end < 0) {
        return "ERROR"
    } else {
        let sum = 0
        if (start > end) {
            [start, end] = [end, start]
        };
        for (let i = start; i <= end; i++) {
            sum += i
        };
        return sum;
    };
};

// Do not edit below this line
module.exports = sumAll;
