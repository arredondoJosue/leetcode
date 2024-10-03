// 28. Find the Index of the First Occurrence in a String
// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Example 1:

// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.
// Example 2:

// Input: haystack = "leetcode", needle = "leeto"
// Output: -1
// Explanation: "leeto" did not occur in "leetcode", so we return -1.

// Constraints:

// 1 <= haystack.length, needle.length <= 104
// haystack and needle consist of only lowercase English characters.

// August 18, 2024
// Status: Wrong Answer - not accepted

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  let i = 0;
  let j = 0;

  while (i <= 9) {
    if (haystack[i] == needle[j]) {
      if (j == needle.length - 1) return i - (needle.length - 1);
      i++;
      j++;
    } else {
      i++;
      j = 0;
      v = [];
    }
  }

  return -1;
};

// August 22, 2024
// Status: Accepted

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  let i = 0;

  while (i <= haystack.length - needle.length) {
    const window = haystack.slice(i, i + needle.length);

    console.log(i, i + needle.length, window);

    if (window === needle) {
      return i;
    } else {
      i++;
    }
  }

  return -1;
};
