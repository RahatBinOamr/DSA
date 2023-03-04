var removeElement = function(nums, val) {
    let start = 0;
    let end = nums.length - 1
    while (start <= end) {
      if (nums[end] === val) {
        end--;
      } else if (nums[start] === val) {
        [nums[start], nums[end]] = [nums[end], nums[start]];
        end--;
      } else {
        start++;
      }
    }
    
    return start;
};
const nums = [3,2,2,3];
const val = 3;
const length = removeElement(nums, val);
console.log(nums.slice(0, length));
console.log(length); 