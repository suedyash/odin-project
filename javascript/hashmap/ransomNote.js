/*

Exercise Question - Solve the Ransom Note problem from leetcode

Details: https://www.instagram.com/reel/C8tbNYvOuU-/?igsh=dWs2MnZzMG4zbmY2

Given two strings - ransomNote and magazine, return true if ransomNote can be constructed by using the letters
from magazine and false otherwise.

Each letter in the magazine can only be used once in ransomNote.

Example 1:
  Input: ransomNote = "a", magazine = "b"
  Output: false

Example 2:
  Input: ransomNote = "aa", magazine = "ab"
  Output: false

Example 3:
  Input: ransomNote = "aa", magazine = "aab"
  Output: true

Constraints:
1 <= ransomNote.length, magazine.length <= 10^5
ransomNote and magazine consist of lowercase English letters.

*/

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */

const canConstruct = function(ransomNote, magazine) {
  var storage = {};
    
  for (var i = 0; i < magazine.length; i++) {
    var letter = magazine[i];
    
    storage[letter] = storage[letter] || 0;
    storage[letter]++;
  }
  
  for (var i = 0; i < ransomNote.length; i++) {
    var letter = ransomNote[i];
    
    if (!storage[letter]) {
        return false;
    }
    storage[letter]--;
  }
  
  return true;
};

console.log(canConstruct("aa", "a"));
console.log(canConstruct("a", "b"));
console.log(canConstruct("aa", "ab"));
console.log(canConstruct("aa", "aab"));