let s = "Let's take LeetCode contest";
var reverseWords = function (s) {
  let tokens = s.split(" ");
  for (let i = 0; i < tokens.length; i++) {
    let char = tokens[i].split("");
    char = char.reverse();
    tokens[i] = char.join("");
  }
  return tokens.join(" ");
};
console.log(reverseWords(s));
