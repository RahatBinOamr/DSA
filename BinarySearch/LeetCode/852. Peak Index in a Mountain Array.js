const peakIndexInMountainArray = (nums) => {
    let start = 0;
    let end = nums.length - 1;
    let mid;
    while (start <= end) {
      mid = Math.floor((start + end) / 2);
      if ((nums[mid] > nums[mid-1] ) && (nums[mid] > nums[mid+1] )) {
        return mid;
      } else if (nums[mid] < nums[mid+1]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
   
  };
  console.log(peakIndexInMountainArray([0,1,0]))