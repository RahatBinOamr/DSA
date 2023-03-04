var findKthPositive = function(arr, k) {
    let missingCount = 0;
    let i = 0;
    while (missingCount < k) {
      i++;
      if (!arr.includes(i)) {
        missingCount++;
      }
    }
    return i;
};
console.log(findKthPositive([1,2,3,4],2))