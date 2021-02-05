// Problem Solving Patterns

// 1) Frequency Counter Pattern
    /* Write a function called same, which accepts 2 arrays.
    The function sohuld return true if every value in the
    array has it's corresponding value squared in the 
    second array. The frequency of values must be the same */

    // Solution 1 - nieve approach

    function same(arr1, arr2){
        if(arr1.length !== arr2.length) { // If the arrays do not match in length, return false.
            return false;
        }
        for(let i=0; i < arr1.length; i++) { // loop over array 1
            let correctIndex = arr2.indexOf(arr1[i] ** 2) // call indexOf, where we pass in the square of each value
            if(correctIndex === -1){ // if the index is -1 (not in arr2) then return false
                return false;
            }
            arr2.splice(correctIndex,1) // If the square value is in arr2, then call arr2.splice to remove the square value from the array.
            // Then repeat for each index.
        }
        return true; //If all indexes square values are in arr2 and 'removed' from arr2, then return true

    }

    // Solution 2 - refactored, better approach

    function same(arr1, arr2) {
        if(arr1.length !== arr2.length){
            return false;
        }
        let frequencyCounter1 = {}  // Object to count the frequency of individual values in the array 1
        let frequencyCounter2 = {} // Object to count the frequency of individual values in the array 2
        for (let val of arr2) {
            frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1 // how many times each value is in arr1
        }
        for(let val of arr2){
            frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1 // how many times each value is in arr2
        }
        for (let key in frequencyCounter1) { // Loop over first object - frequencyCounter1
            if(!(key ** 2 in frequencyCounter2)) { // Check if a value in the object is squared and is that square value in arr2
                return false // if not then return false
            }
            if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){ // Check if the frequency corressponds, e.g., if there is two 2's is there two 4's.
                return false // if not return false
            }
        }
        return true
    }

    same([1,2,3,2], [9,1,4,4]) // returns true


// Same frequency challenge

/* Write a function called sameFrequency. Given 2 
positive integers, find out if the two numbers have
the same frequency of digits. Your solution must
have the following complexities: Time: O(N) */

// Given 2 numbers
// Compare the two
// create a variable for number of digits??

function sameFrequency(a, b) {
    const digits = {};
   
    while (a > 0) {
      digits[a % 10] = (digits[a % 10] || 0) + 1;
      a = Math.floor(a / 10);
    }
   
    while (b > 0) {
      if (!digits[b % 10]) {
        return false;
      }
   
      digits[b % 10] -= 1;
      b = Math.floor(b / 10);
    }
   
    return true;
  }