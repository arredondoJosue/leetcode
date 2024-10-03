// 14. Longest Common Prefix

// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters.

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return "";

  strs.sort();
  console.log(strs);

  let firstStr = strs[0];
  let lastStr = strs[strs.length - 1];

  let commonPrefix = "";

  for (let i = 0; i < firstStr.length; i++) {
    //compare letters
    if (firstStr[i] === lastStr[i]) {
      commonPrefix += firstStr[i];
    } else {
      break;
    }
  }

  return commonPrefix;
};
