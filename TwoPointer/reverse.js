const arr = [4, 8, 3, 5, 7, 9, 10];
function Reverse(arr) {
  let start = 0;
  let end = arr.length - 1;
  let temp;
  while (start < end) {
    temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
  return arr;
}
console.log(Reverse(arr));
