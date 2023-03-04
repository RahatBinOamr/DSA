var solution = function (isBadVersion) {
  return function (n) {
    let start = 0;
    let end = n;
    let result = n;
    let mid;
    while (start <= end) {
      mid = Math.floor((start + end) / 2);
      if (isBadVersion(mid)) {
        result = mid;
        end = mid-1;
      } else {
        start = mid + 1;
      }
    }
    return result;
    
  };
};

