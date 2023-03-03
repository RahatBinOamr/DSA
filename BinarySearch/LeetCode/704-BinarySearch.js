const nums = [10, 12, 12, 14, 15, 18, 20, 30, 40, 50, 60, 80, 90, 100];
const target = 80;
const BinarySearch = (nums, target) => {
  let start = 0;
  let end = nums.length - 1;
  let mid;
  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
};
console.log(BinarySearch(nums, target));
