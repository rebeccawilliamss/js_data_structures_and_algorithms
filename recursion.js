// Recursion

// Example 1
function countDown(num){
   if (num <= 0) { // base case - function ends at 0
       console.log("All done!")
       return;
   } 
   console.log(num);
   num--;
   countDown(num);
}

// print 3
// countDown(2)
// print 2
// countDown(1)
// print 1
// countDown(0) base case

// Example 2
function sumRange(num) {
    if(num === 1) return 1; // base case
    return num + sumRange(num-1); // recursive call 
}

sumRange(3)
// return 3 + sumRange(2) -1
// return 2 + sumRange(1) -1
// return 1 (base case) then we go back...

// return 1
// sumRange(1) = 2 + 1 = 3
// sumRange(3) = 3 + 3 because the input is 3
// sumRange(3) just waits for what comes back 
// The answer is therefore 3 + 3 = 6


// Recursive factorial example
// 4! = 4 * 3 * 2 * 1

function factorial(num){
    if(num === 1) return 1;
    return num * factorial(num-1)
}

factorial(3)
// factorial(3) returns 3 * factorial(2)
// factorial(2) returns 2 * factorial(1)
// factorial(1) returns 1, then we work back up...

// 1 * 2
// 1 * 2 * 3

// Helper method recursion
function collectOdds(arr){
    let result = []; // Where the odd numbers will be stored. Defined outside to stop the array resetting each time.

    function helper(helperInput){
        if (helperInput.length === 0) { // basecase - if helper input is empty
            return;
        }

        if (helperInput[0] % 2 !== 0){ // Check if first input is not divisible by 2, if not then it is odd
            result.push(helperInput[0]) // push helperInput[0] to result
        }
        helper(helperInput.slice(1)) // slice the array by 1 each time to move up/shrink the array   
    }
    helper(arr) // call helper function with the array
    return result; // return result
}


// Pure recursion method - self retained
function collectOddValues(arr){
    let newArr = []; // this will be a new array each time the function is called recursively

    if(arr.length === 0) { // if the input is empty then just return the new array
        return newArr;
    }

    if(arr[0] % 2 !== 0){ // check if the first number in the array is odd
        newArr.push(arr[0]); // if it is odd, push it to the new array
    }

    newArr = newArr.concat(collectOddValues(arr.slice(1))); // then, assign the new aaray to equal the current value.concat the result of collectOddValues on hte rest of the array
    return newArr; // when arr is empty
}
collectOddValues([1,2,3,4,5])
// [1].concat(collectOddValues([2,3,4,5]))
// [].concat(collectOddValues([3,4,5]))
// [3].concat(collectOddValues([4,5]))
// [].concat(collectOddValues([5]))
// [5].concat(collectOddValues([]))

// Left with the array containing only odd numbers [1,3,5]

// Challenge
/* Write a function called power which accepts a base and an 
exponent. The function should return the power of the base to
the exponent. This function should mimic the functionality of
Math.pow() - do not worry about negative bases and exponents. */

// Math.pow() - returns the value of x to the power of y.

function power(base, ex){
    if (ex === 1) return 1;
    return base * power(base,ex-1);
}

/* Write a function factorial which accepts a number and
returns the factorial of that number. A factorial is the
product of an integer and all the integers below it, e.g.,
factorial 4 = 24 because 4 * 3 * 2 * 1 = 24. Factorial 0
is always 1. */

function factorials(num) {
    if (num === 0) return 1;
    return num * factorials(num -1);
}

/* Write a function called productOfArray which takes in
an array of numbers and returns the product of them all. */

function productOfArray(arr){
    if (arr.length === 0) return 1;
    return arr[0] * productOfArray(arr.slice(1));
}

/* Write a function called recursiveRange which accepts a 
number and adds up all the numbers from 0 to the number
passed to the function. */

function recursiveRange(num) {
    if (num === 0) return 0;
    return num * recursiveRange(num-1);
}

/* Write a recursive function called fib which accepts a 
number and returns the nth number in the Fibonacci sequence. */

function fib(num){
    if (num <= 2) return 1;
    return fib(num-1) + fib(num-2);
}