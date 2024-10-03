// 58. Length of Last Word

// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal
// substring
//  consisting of non-space characters only.

// Example 1:

// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.
// Example 2:

// Input: s = "   fly me   to   the moon  "
// Output: 4
// Explanation: The last word is "moon" with length 4.
// Example 3:

// Input: s = "luffy is still joyboy"
// Output: 6
// Explanation: The last word is "joyboy" with length 6.

// Constraints:

// 1 <= s.length <= 104
// s consists of only English letters and spaces ' '.
// There will be at least one word in s.

// First Submission
// Status: Accepted

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let lastWord = "";
  let words = [];
  let word = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      if (word.length > 0) {
        console.log(word);
        lastWord = word.join("");
        // words.push(word.join(''));
        console.log(lastWord);
      }
      word = [];
      continue;
    }

    word.push(s[i]);
  }

  if (word.length > 0) {
    lastWord = word.join("");
  }

  return lastWord.length;
};

// Second Submission - Cleaner
// Status: Accepted
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let lastWord = "";
  let word = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      if (word.length > 0) {
        lastWord = word.join("");
      }
      word = [];
      continue;
    }

    word.push(s[i]);
  }

  if (word.length > 0) {
    lastWord = word.join("");
  }

  return lastWord.length;
};
