// Problem Solving Approach
// Character codes can be more efficient than regEx

function isAlphaNumeric(char) {
    var code = char.charCodeAt(0); // get character code at index 0
    if(!(code > 47 &&code < 58) &&  // numeric (0-9)
       !(code > 64 && code < 90) && // upper alpha (A-Z)
       !(code > 96 && code < 123)) { // lower alpha (a-z)
           return false;
       }
       return true;
}

function charCount(str){
    var obj = {};
    for (var char of str) { // for a character in a string
        if (isAlphaNumeric(char)) { // if that character is alphanumeric
            char = char.toLowerCase(); // make it lower case
            obj[char] = ++obj[char] || 1; // and add it into the object or initialise it to 1 and add 1 to the current value
        }
    }
    return obj;
}