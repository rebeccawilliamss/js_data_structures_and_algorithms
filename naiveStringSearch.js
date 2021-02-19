// Naive String Search
/* Loop over longer string then 
loop over the shorter string. If the 
characters don't match, break out of 
the inner loop. If they do match, keep
going. If you complete the inner loop
and find a match */

function naiveSearch(long, short){
    var count = 0;
    for (var i = 0; i < long.length; i++){ // when the letter do not match, we break out of the loop and go to the inner loop
        for (var j = 0; j < short.length; j++){
            if (short[j] !== long[i+j]){ // add i and j so i moves up from 0
                break; // any time there isn't a match, break and inner loop goes back to the start (reset j back to l)
            }
            if (j === short.length - 1){ // - 1 because length is greater than the index (3 - 2 for lol)
                count ++;
            }
        }
    }
    return count;
}

naiveSearch('lorie loled', 'lol');