// Sliding Window - o(n) complexity

/* Write a function called maxSubarraySum which
accepts an array of integers and a number called n.
The function should calculate the maximum sum of
n consecutive elements in the array. */

// start with a loop
// second loop that goes and sums together 4 items
// create a variable to keep track of sum

function maxSubarraySum(arr, num){ // no relooping
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) return null; // edge case
    for (let i = 0; i < num; i++) {
        maxSum += arr[i]; // store the sum of the first 3 numbers in maxSum
    }
    tempSum = maxSum; // set the maxSum to tempSum
    for (let i = num; i < arr.length; i++) { // start the loop at the next number which would be 2 (index 4) using the example below
        tempSum = tempSum - arr[i - num] + arr[i]; // add 2 to tempSum and subtract 2, then add 1 and subtract 6 etc to move through the array
        maxSum = Math.max(maxSum, tempSum); // update maxSum if tempSum is larger
    }
    return maxSum;
}
maxSubarraySum([2,6,9,2,1,8,5,6,3], 3)

// Challenge - minSubArrayLen

/* Write a function called minSubArrayLen which 
accepts two parameters - an array of positive
integers and a positive integer. The function
should return the minimal length of a contiguous
subarray of which the sum is greater than or equal
to the integer passed to the function. If there isn't
one, return 0 instead. */

function minSubArrayLen(arr, num) {
    let result = Number.MAX_SAFE_INTEGER
    let left = 0
    let sum = 0

    for(let i = 0; i < arr.length; i++){
        sum += arr[i]
        while(sum >= num) {
            result = Math.min(result, i - left + 1)
            sum -= arr[left++]
        }
    }
    return result === Number.MAX_SAFE_INTEGER ? 0 : result // If result is equal to Number.Max.. then return 0. If not (:) then return the result
}
([2,6,9,2,1,8,5,6,], 3) // returns an array of size 2 because there are 2 numbers that add up to 3 (2 and 1)

// Challenge

/* Write a function called findLongestSubstring, which
accepts a string and returns the length of the longest
substring with all distinct characters. */

/* The difference between the pointers = the max
firstPointer - secondPointer + 1. This is because
we need to add one to offset (e.g., 0 - 0 + 1 = 1) */

/* When firstPointer moves to a char that is already in the new array 
(it's been repeated), then secondPointer moves up 1 */

function findLongestSubstring(str) {
    let longest = 0; // length of longest sub string
    let seen = {}; // characters seen before
    let start = 0; // start of the substring

    for (let i = 0; i < str.length; i++) {
        let char = str[i] // loop over string and get the current char
        if(seen[char]) { // check if we've seen the current char before
           start = Math.max(start, seen[char]); // if we have seen it then we move up the starting point of the substring
        }
        longest = Math.max(longest, i - start + 1); // check if we need to update longest with every iteration
        seen[char] = i + 1; // mark char as seen (update the index where we last saw it)
        }
        return longest;   
}

('thisisawesome') 