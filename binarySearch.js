// Binary Search - only works on sorted data

/* Split the array and pick a half way point and
check what side of the point the element is and
search that half. */

function binarySearch(arr, val){
    let left = 0;
    let right = arr.length -1;
    let middle = Math.floor((left + right) / 2);


    while (arr[middle] !== val) {
        if(val < arr[middle]){
            right = middle -1;;
        } else {
            right = middle +1;
        }
        middle = Math.floor((left + right) / 2);
    }
    return arr[middle] === val ? middle : -1;
}

