// Multiple Pointers

/* Write a function called sumZero which
accepts a sorted array of integers. The
function should find the first pair where
the sum is 0. Return an array that includes
both values that sum to 0 or undefined if a 
pair does not exist */

function sumZero(arr){
    let left = 0; // left index
    let right = arr.length - 1; // right index

    while(left < right) {
        let sum = arr[left] + arr[right]; // check the sum of array left and array right (e.g., -4 + 10)
        if(sum === 0) { // if sum is 0
            return [arr[left], arr[right]]; // return the two numbers as an array
        } else if (sum > 0) { // if the sum is less than 0
            right--; // subtract 1 from the right index
        } else { 
            left++; // And add 1 to the left index (e.g., go from -4 to -3)
        }
    }
}

sumZero([-4,-3,-2,-1,0,1,2,3,10])

// Challenge

/* Implement a function called areThereDuplicates which
accepts a variable number of arguments, and checks whether
there are any duplicates among the arguments passed in.
You can solve this using the FCP or MP pattern */

function areThereDuplicates(){
    let sortedArr = Array.from(arguments).sort()
    let i = 0;
    for (let arg in sortedArr){
        if (sortedArr[arg] === sortedArr[i]) {
            return true;
        } else {
            i++;
        }
        return false;
    }
}

// Challenge

/* Wite a function called averagePair. Given a sorted
array of integers and a target average, determine if there
is a pair of values in the array where the average of the
pair equals the target average. There may be more than one
pair that matches the average target. */

function averagePair(arr, value){
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let average = (arr[left] + arr[right]) / 2
        if (average === value) return true;
        else if (average < value) left++;
        else right--;
        }
        return false;
    }
    averagePair([1,2,2,3,4,4,5,6,7], 2)

// Challenge

/* Write a function called isSubsequence which takes in
two strings and checks whether the characters in the first
string form a subsequence of the characters in the second
string. In other words, the function should check whether
the characters in the first string appear somewhere in the 
second string, without their order changing. */

function isSubsequence(str1, str2){
    var i = 0;
    var j = 0;

    if (!str1) return true;
    while (j < str2.length) {
        if (str2[j] === str1[i]) i++;
        if (i === str1.length) return true;
        j++;
    }
    return false;
}
