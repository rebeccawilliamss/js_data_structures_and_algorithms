// Print numbers from 1-10
function printToTen(){
    for (i = 0; i <= 10; i++){
        console.log(i);
    }
}

// Print odd numbers less than 100
function printOdd(){
    for (i = 0; i < 100; i+=2){
        console.log(i);
    }
}

// Calculate the sum of numbers from 1-10
function sumToTen(){
    sum = 0;
    for (i = 0; i <= 10; i++){
        sum += i;
    }
    console.log(sum);
}

// Calculate the sum of odd numbers > 10 and < 30
function sumOfNumbers(){
    var sum = 0;
    for (i = 11; i <= 30; i+=2){
        sum += i;
    }
    console.log(sum);
}

// convert from celsius to fahrenheit
function convertTemp(num){
    return num * 1.8 + 32;
}

//convert from fahrenheit to celsius
function convertFahrenheitToCelsius(temp){
    return (temp - 32) / 1.8;
}

// calculate the sum of numbers in an array of numbers
function calculateSum(arr){
    var sum = 0;
    for (i=0; i <= arr.length; i++){
        sum += arr[i];
    }
}

// calculate the average of the numbers in an array
function average(arr){
    var av = arr.length;
    var sum = 0;

    for (var i=0; i <= arr.length; i++){
        sum += arr[i];
    }
    return sum / av;
}

/* create a function that receives an array of
numbers and returns an array containing only the
positive numbers */
function positiveNums(arr){
    var pos = [];
    for (var i = 0; i < arr.length; i++){
        var num = arr[i];
        if (num >= 0){
            pos.push(num);
        }
    }
    return pos;
}

// reverse an array
function reverse(arr){
    var arr2 = [];
    for (var i = 0; i <= arr.length; i--){
        arr2.push(arr[i]);
    }
    return arr2;
}

// reverse a string
function reverseString(str){
    var str2 = '';
    for (var i = 0; i <= str.length; i--){
        var char = str[i];
        str2 += char;
    }
    return str2;
}

/* Create a function that will receive two
arrays of numbers as arguments and return
an array composed of all the numbers that
are either in the first array or second
array but not in both */
function mergeArrays(arr1, arr2){
    arr3 = [];

    for (let num of arr1){
        if (!arr2.includes(num)) {
            arr3.push(num);
        }
    }

    for (let num of arr2){
        if (!arr1.includes(num)){
            arr3.push(num);
        }
    }
    return arr3;
}

// return longest string
function longestString(str){
    longestStr = '';
    for (i = 0; i < str.length; i++){
        if (str[i].length > longestStr.length){
            longestStr = str[i];
        }
    }
    return longestStr;
}

/* write a function that takes a string, and
returns the character that is most commonly
used in the string */
function mostCommonChar(str){
    const charCount = {};
    let maxCharCount = 0;
    let maxChar = '';
    for (let i = 0; i < str.length; i++){
        charCount[str[i]] = ++charCount[str[i]] || 1;
    }
    for(let key in charCount) { 
        if(charCount[key] >= maxCharCount) {
            maxCharCount = charCount[key] 
            maxChar = key;
        }
    }
    return maxChar; 
}
