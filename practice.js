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



// sumMissingNumbers([4, 3, 8, 1, 2]) 
// ➞ 18
// 5 + 6 + 7 = 18

// sumMissingNumbers([17, 16, 15, 10, 11, 12]) 
// ➞ 27
// 13 + 14 = 27

// sumMissingNumbers([1, 2, 3, 4, 5]) 
// ➞ 0
// No Missing Numbers (i.e. all numbers in [1, 5] are present in the list)



// Date: May 13 2020
// Apocalyptic Numbers
// A number n is apocalyptic if 2^n contains a string of 3 consecutive 6s (666 being the presumptive "number of the beast").
// Create a function that takes a number n as input. If the number is apocalyptic, find the index of 666 in 2^n, and return "Repent! X days until the Apocalypse!" (X being the index). If not, return "Crisis averted. Resume sinning.".


function apocalyptic(num) {
    var pow = JSON.stringify(Math.pow(2, num))
    var arr =pow.split("");
    var index = 0;
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if(element === arr[i+1] && element === arr[i+2]) {
            index = i - 1;
            break;
        }
    }

    if(index === 0) {
        console.log("Crisis averted. Resume sinning.")
    } else {
        console.log("Repent! " + index + " days until the Apocalypse!")
    }
}


// apocalyptic(109) 
// ➞ "Crisis averted. Resume sinning."

// apocalyptic(157) 
// ➞ "Repent! 9 days until the Apocalypse!"
// 2^157 -> 182687704666362864775460604089535377456991567872
// 666 at 10th position (index 9)

// apocalyptic(175) 
// ➞ "Crisis averted. Resume sinning."

//  apocalyptic(220) 
// ➞ "Repent! 6 days until the Apocalypse!"


// Date: May 14 2021 
// Reverse the Odd Length Words
// Given a string, reverse all the words which have odd length. The even length words are not changed.

function reverseOdd(string) {
    const split = string.split(" ");
    returnArr = split.map(word => {
        if(word.length % 2 !== 0) {
           return word.split("").reverse().join("")
        } else {
            return word
        }
    });

    console.log(returnArr.join(" "))
}


reverseOdd("Bananas") 
// ➞ "sananaB"

reverseOdd("One two three four") 
// ➞ "enO owt eerht four"

reverseOdd("Make sure uoy only esrever sdrow of ddo length")
// ➞ "Make sure you only reverse words of odd length"