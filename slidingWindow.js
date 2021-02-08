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
    let sum = 0;
    let temSum = 0;

    if (arr.length < num) return 0;
    for (let i = 0; i < num; i++) {
        sum += arr[i];
    }

    tempSum = sum;
    


}