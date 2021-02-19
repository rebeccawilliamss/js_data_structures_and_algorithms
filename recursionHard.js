// reverse a string
function reverse(str) {
    return str.split("").reverse().join("");
}

// returns true if the string is a palindrome
function isPalindrome(str) {
    if (str.length === 1) return true;
    if (str.length === 2) str[0] === str[1]
    if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1,-1))
    return false;
    }
}