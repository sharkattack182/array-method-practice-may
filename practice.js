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

leftRotations("abc") 
// ➞ ["abc", "bca", "cab"]

rightRotations("abc")
// ➞ ["abc", "cab", "bca"]

leftRotations("abcdef") 
// ➞ ["abcdef", "bcdefa", "cdefab", "defabc", "efabcd", "fabcde"]

rightRotations("abcdef") 
// ➞ ["abcdef", "fabcde", "efabcd", "defabc", "cdefab", "bcdefa"]