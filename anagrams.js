// Anagram Problem Solving Approach

/* Given two strings, write a function to determine if the
second string is an anagram of the first. An anagram is a word,
phrase or name formed by rearranging the letters of another, such
as 'cinema' formed from 'iceman'. Do not worry about spaces, numbers
and special characters. */

function validAnagram(str1, str2) {
    if (str1.length !== str2.length) {
      return false;
    }
  
    const find = {}; // create object
  
    for (let i = 0; i < str1.length; i++) { // Loop over first string
      let letter = str1[i]; // Give letter a variable name for cleaner code
      // if letter exists, increment (add 1), or if it does not exist then set it to 1
      find[letter] ? find[letter] += 1 : find[letter] = 1;
    }
  
    for (let i = 0; i < str2.length; i++) { // Loop over second string
      let letter = str2[i]; 
      // can't find letter or letter is zero then it's not an anagram
      if (!find[letter]) { // If we can't find the letter we return false
        return false;
      } else { // if we can find the letter, subtract 1 to set it to 0 (0 means the letter is in the array)
        find[letter] -= 1;
      }
    }
  
    return true;
  }
  
  // {a: 0, n: 0, g: 0, r: 0, m: 0, s:1}
  validAnagram('anagrams', 'nagaramm')

