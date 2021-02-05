// Divide and Conquer

/* Given a sorted array of integers, write
a function called search that accepts a value 
and returns the indx where the value passed to
the function is located. If the value is not found,
return -1. */

// Linear search - naive solution time compexity O(N)

function search(arr, val){
    for (let i = 0; i < arr.length; i++){
        if(arr[i] === val) {
            return i;
        }
    }
    return -1;
}

// Binary search - time complexity Log(N)

function searchBinary(array, val){
    let min = 0;
    let max = arr.length - 1;

    while(min <= max) {
        let middle = Math.floor((min + max) / 2); // Floor returns the largest integer >= a number; find middle number
        let currentElement = array[middle];

        if (arr[middle] < val){
            min = middle + 1;
        }
        else if (array[middle] > val){
            max = middle - 1;
        }
        else {
            return middle;
        }
    }
    return -1;

}