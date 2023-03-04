var removeDuplicates = function(nums) {
    let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[j] !== nums[i]) {
      i++;
      nums[i] = nums[j];
    }
  }
  
  return i + 1;
};
const nums = [1, 1, 2, 2, 3, 4, 4, 5];
const k = removeDuplicates(nums);
console.log(nums.slice(0, k)); 
console.log(k);
