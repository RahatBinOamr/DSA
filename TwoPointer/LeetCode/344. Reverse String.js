const s = ["h", "e", "l", "l", "o"];
var reverseString = function (s) {
  let start = 0;
  let end = s.length - 1;
  let temp;
  while (start < end) {
    temp = s[start];
    s[start] = s[end];
    s[end] = temp;
    start++;
    end--;
  }
  return s;
};
console.log(reverseString(s));
