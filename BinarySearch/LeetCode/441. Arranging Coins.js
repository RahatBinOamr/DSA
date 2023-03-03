var arrangeCoins = function(n) {
    /* sum = (k * (k + 1)) / 2 */
    return Math.floor(Math.sqrt(2 * n + 0.25) - 0.5);
};
console.log(arrangeCoins(8))