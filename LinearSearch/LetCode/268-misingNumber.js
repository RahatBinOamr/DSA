function misingNumber (nums){
let sum = 0 ;
for(i =0 ; i <= nums.length; i++){
    sum = sum + i;
}
let sum2=0;
for(let i= 0; i<nums.length; i++){
    sum2= sum2+ nums[i];
}
return sum-sum2;
}
console.log(misingNumber([6,7,0,5,3,2,1]));