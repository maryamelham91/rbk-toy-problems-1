/**
* Implement a function that finds the longest palindrome in a given string.
* Palindrome is a string that is the same when you read it from right to left
* and from left to right.
* For example, in the string "My dad is a racecar athlete", the longest
*palindrome is "a racecar a". Count whitespaces as valid characters. Other
*palindromes in the above string include "dad", "ete", " dad " (including whitespace on each side of dad).

* Extra credit: The best solution for this problem runs in linear time.
* If you would like a challenge, read about Manacher's algorithm
*/

var longestPalindrome = function (string) {
  var longest = '';
  for (var i = 0; i < string.length; i++) {
    var currentChar = string[i];
    var firstCase;
    for (var j = i + 1; j < string.length; j++) {
      if (currentChar === string[j]) {
        firstCase = j;
        var subString = string.slice(i, firstCase + 1);
        if (subString.length > longest.length &&
            subString.toLowerCase() === subString.split('').reverse().join('').toLowerCase()) {
              longest = subString;
        }
      }
    }
  }
  return longest;
};

