const words = ["def", "ghi"];
var firstPalindrome = function (words) {
  for (let i = 0; i < words.length; i++) {
    let str = words[i];
    if (isPalindrome(str)) {
      return str;
    }
  }

  return "";
};
function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return "";
    }
    left++;
    right--;
  }

  return true;
}
console.log(firstPalindrome(words));
