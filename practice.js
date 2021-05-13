// Date: May 10 2020
// All Rotations of a String
// Create a left rotation and a right rotation function that returns all the left rotations and right rotations of a string.

function leftRotations(string) {
    var returnArr = [];
    for (let i = 0; i < string.length; i++) {
        var firstHalf = string.substring(0, i);
        var secondHalf = string.substring(i, string.length);

        var returnString = secondHalf.concat(firstHalf);
        returnArr.push(returnString);
    }

    console.log(returnArr)
}

function rightRotations(string) {
    returnArr = []
for (let i = 0; i < string.length; i++) {
    
    var firstHalf = string.substring(string.length - i, string.length);
    var secondHalf = string.substring(0, string.length - i);
    
    var returnString = firstHalf.concat(secondHalf);
    returnArr.push(returnString);
}
console.log(returnArr)
}

// leftRotations("abc") 
// ➞ ["abc", "bca", "cab"]

// rightRotations("abc")
// ➞ ["abc", "cab", "bca"]

// leftRotations("abcdef") 
// ➞ ["abcdef", "bcdefa", "cdefab", "defabc", "efabcd", "fabcde"]

// rightRotations("abcdef") 
// ➞ ["abcdef", "fabcde", "efabcd", "defabc", "cdefab", "bcdefa"]



// Date: May 11 2020
// Numbers in Strings
// Create a function that takes an array of strings and returns an array with only the strings that have numbers in them. If there are no strings containing numbers, return an empty array.

function numInStr(array) {
    var returnArr = [];
    var hasNum = /\d/;
   array.forEach(element => {
       if(hasNum.test(element)) {
           returnArr.push(element)
       }
   });

   console.log(returnArr)
}



// numInStr(["1a", "a", "2b", "b"]) 
// ➞ ["1a", "2b"]

// numInStr(["abc", "abc10"]) 
// ➞ ["abc10"]

// numInStr(["abc", "ab10c", "a10bc", "bcd"]) 
// ➞ ["ab10c", "a10bc"]

// numInStr(["this is a test", "test1"]) 
// ➞ ["test1"]


// Date: May 12 2020
// Sum of Missing Numbers
// Create a function that returns the sum of missing numbers from the given array.

function sumMissingNumbers(array) {
    var sortedArr = array.sort((a,b) => (a-b));

    var firstNum = sortedArr[0];
    var lastNum = sortedArr[sortedArr.length - 1];

    var compareArr = [];
    var sum = 0;

    for (let i = firstNum; i <= lastNum; i++) {
        compareArr.push(i)
    };

    for (let i = 0; i < compareArr.length; i++) {
        const element = compareArr[i];

        var booleanVal = sortedArr.includes(element);
        if(booleanVal === false) {
            sum += parseInt(element);
        }
    }

    console.log(sum)
}



sumMissingNumbers([4, 3, 8, 1, 2]) 
// ➞ 18
// 5 + 6 + 7 = 18

sumMissingNumbers([17, 16, 15, 10, 11, 12]) 
// ➞ 27
// 13 + 14 = 27

sumMissingNumbers([1, 2, 3, 4, 5]) 
// ➞ 0
// No Missing Numbers (i.e. all numbers in [1, 5] are present in the list)