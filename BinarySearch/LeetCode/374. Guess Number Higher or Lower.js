var guessNumber = function(n) {
    let left = 1;
    let right = n;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      const result = guess(mid);
      if (result === 0) {
        return mid;
      } else if (result === 1) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return -1; 
};
let pickedNumber=1;
const guess = (num) => {
    if (num === pickedNumber) {
      return 0;
    } else if (num > pickedNumber) {
      return -1;
    } else {
      return 1;
    }
  };

  
console.log(guessNumber(1))