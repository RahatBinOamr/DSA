var findDuplicate = function(nums) {
    let start = 1;
    let end = nums.length - 1;
    while (start < end) {
      let mid = Math.floor((start + end) / 2);
      let count = 0;
      for (let num of nums) {
        if (num <= mid) {
          count++;
        }
      }
      if (count > mid) {
        end = mid;
      } else {
        start = mid + 1;
      }
    }
    return start;
};
console.log(findDuplicate([3,1,3,4,2]))