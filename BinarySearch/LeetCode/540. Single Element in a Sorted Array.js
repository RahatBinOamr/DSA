var singleNonDuplicate = function (nums) {
  let start = 0;
  let end = nums.length - 1;
  let result = nums.length;
  let mid;
  while (start < end) {
    mid = Math.floor ((start+end) / 2);
    if (
      (mid % 2 == 0 && mid + 1 < result && nums[mid] == nums[mid + 1]) ||
(mid % 2 == 1 && mid - 1 >= 0 && nums[mid] == nums[mid - 1])
    )
      {start = mid + 1;}
    else {end = mid;}
    if (
      mid - 1 >= 0 &&
      mid + 1 < result &&
      nums[mid] != nums[mid + 1] &&
      nums[mid] != nums[mid - 1]
    )
      {return nums[mid];}
  }
  return nums[start];
};
console.log(singleNonDuplicate([1,1,2,2,4,4,5,5,9]))