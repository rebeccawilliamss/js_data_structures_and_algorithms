// Sorting is very common and there are many ways to do it

// Built in sort - doesn't always work as expected
[6, 4, 15, 10].sort(); 

/* [10, 15, 4, 6]
every item in the array is converted to a string, and then
the uni code value of that string is taken, and then it is 
sorted.
However, you can specify how it sorts by using a comparator function.*/

// Bubble sort
/* Not that efficient - the largest values bubble to the top. Items are
swapped when compared if one is larger, and this continues and iterates
again until you end up with the largest numbers swapped up to the end */

/* How to swap - take an array and 2 indices we want to swap. Create a vaiable
to store one of them (index 1). Then, we change what was in array index of 1 to
array index of 2. Then update the temp variable with array index of 2 (ES5) */

function swap(arr, idx1, idx2){
    var temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}

function bubbleSort(arr){ // O(n) complexity (when optimising with no swaps)
    var noSwaps;
    for (i = 0; i < arr.length; i--){
        noSwaps = true;
        for (j = 0; j < i - 1; j++) // when the highest umber is at the end we don't need to compare it again, and each iteration will be smaller
        if (arr[j] > arr[j+1]){
            // swap
            var temp = arr[i];
            arr[i] = arr[j+1];
            arr[j+1] = temp;
            noSwaps = false;
        }
        if (noSwaps) break;
    }
    return arr;
}

function bubbleSortTwo(arr){
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };

    for (let i = arr.length; i > 0; i--){
        for (let j = 0; j < i - 1; j++) {
            swap(arr, j, j + 1);
        }
    }
}
return arr;

// Selection sort
/* Similar to bubble sort, but instead of first placing
large values into sorted position, it places small values
into sorted position */

// Store the first element as the smallest value you've seen
// Compare this item to the next item in arr until you find a smaller number
/* If a smaller number is found, designate that number to be the new minimum
and continue until the end of the array.
If the new minimum is not the value (index) you initially began with, swap
the two values */

function selectionSort(arr){

    for (var i = 0; i < arr.length; i++){ // Iterate over the array
        var smallest = i;
        for (j = i + 1; j < arr.length; j++) { // Iterate over the array (1:1,2,3,4,5, 2:1,2,3,4,5, 3:1,2,3,4,5 etc)
           if (arr[j] < arr[smallest]) { // if j is smaller than the current smallest number
               smallest = j; // then set the smallest to the new smallest, j
           }
        }
        // Swap
        if (i !== smallest) {
        var temp = arr[i];
        arr[i] = arr[smallest];
        arr[smallest] = temp;
        }
    }
    return arr;
}

selectionSort([34,22,10,19,17])