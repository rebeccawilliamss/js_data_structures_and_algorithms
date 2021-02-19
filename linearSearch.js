function linearSearch(arr, num){
    for(var i = 0; i < arr.length; i++){
        if (arr[i] === num) return i;
    }
    return -1;
}

linearSearch([31,56,1,2], 1)

/* BIG O
 O(1) best case
 O(n) average - worst case
 As n grows, so does the average time it takes */
