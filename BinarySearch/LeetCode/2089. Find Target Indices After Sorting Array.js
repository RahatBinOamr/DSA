var targetIndices = function(nums, target) {
    let less = 0;
    let largeTarget = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == target)
            largeTarget++;
        if (nums[i] < target)
            less++;
    }
    let ans = [];
    while (largeTarget--) {
        ans.push(less++);
    }
    return ans;
};
console.log(targetIndices([1,2,5,2,3],5))