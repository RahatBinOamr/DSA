var isPerfectSquare = function(num) {
    const sqrt = Math.sqrt(num);
    return sqrt === Math.floor(sqrt);
};
console.log(isPerfectSquare(11))