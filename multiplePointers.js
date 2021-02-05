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