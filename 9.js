// 9. Palindrome Number
// Given an integer x, return true if x is a
// palindrome
// , and false otherwise.

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

// Constraints:

// -231 <= x <= 231 - 1

// Follow up: Could you solve it without converting the integer to a string?

// July 17, 2024 - using string
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x.toString().split("").reverse().join("") == x) return true;
  return false;
};

// September 1, 2024 - using 2 pointers
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) return false;
  x = x.toString();

  // fp = front pointer, ep = end pointer
  let fp = 0;
  let ep = x.length - 1;

  while (fp < x.length) {
    if (x[fp] === x[ep]) {
      fp++;
      ep--;
      continue;
    }

    return false;
  }

  return true;
};
