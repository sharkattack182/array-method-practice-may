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

  console.log(returnArr);
}

function rightRotations(string) {
  returnArr = [];
  for (let i = 0; i < string.length; i++) {
    var firstHalf = string.substring(string.length - i, string.length);
    var secondHalf = string.substring(0, string.length - i);

    var returnString = firstHalf.concat(secondHalf);
    returnArr.push(returnString);
  }
  console.log(returnArr);
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
  array.forEach((element) => {
    if (hasNum.test(element)) {
      returnArr.push(element);
    }
  });

  console.log(returnArr);
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
  var sortedArr = array.sort((a, b) => a - b);

  var firstNum = sortedArr[0];
  var lastNum = sortedArr[sortedArr.length - 1];

  var compareArr = [];
  var sum = 0;

  for (let i = firstNum; i <= lastNum; i++) {
    compareArr.push(i);
  }

  for (let i = 0; i < compareArr.length; i++) {
    const element = compareArr[i];

    var booleanVal = sortedArr.includes(element);
    if (booleanVal === false) {
      sum += parseInt(element);
    }
  }

  console.log(sum);
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
  var pow = JSON.stringify(Math.pow(2, num));
  var arr = pow.split("");
  var index = 0;
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element === arr[i + 1] && element === arr[i + 2]) {
      index = i - 1;
      break;
    }
  }

  if (index === 0) {
    console.log("Crisis averted. Resume sinning.");
  } else {
    console.log("Repent! " + index + " days until the Apocalypse!");
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
  returnArr = split.map((word) => {
    if (word.length % 2 !== 0) {
      return word.split("").reverse().join("");
    } else {
      return word;
    }
  });

  console.log(returnArr.join(" "));
}

// reverseOdd("Bananas")
// ➞ "sananaB"

// reverseOdd("One two three four")
// ➞ "enO owt eerht four"

// reverseOdd("Make sure uoy only esrever sdrow of ddo length")
// ➞ "Make sure you only reverse words of odd length"

// Date: May 14 2021
// Positive Dominant
// An array is positive dominant if it contains strictly more unique positive values than unique negative values. Write a function that returns true if an array is positive dominant.

function isPositiveDominant(array) {
  var sortedArr = array.slice().sort();
  var results = [];
  for (let i = 0; i < sortedArr.length; i++) {
    const element = sortedArr[i];
    if (element !== sortedArr[i + 1]) {
      results.push(element);
    }
  }

  var pos = 0;
  var neg = 0;

  results.forEach((value) => {
    if (value < 0) {
      neg++;
    } else {
      pos++;
    }
  });

  if (pos > neg) {
    console.log("True");
  } else {
    console.log("False");
  }
}

// isPositiveDominant([1, 1, 1, 1, -3, -4])
// ➞ false
// There is only 1 unique positive value (1).
// There are 2 unique negative values (-3, -4).

// isPositiveDominant([5, 99, 832, -3, -4])
// ➞ true

// isPositiveDominant([5, 0])
// ➞ true

// isPositiveDominant([0, -4, -1])
// ➞ false

// Date: May 14 2021
// Censored Strings
// Someone has attempted to censor my strings by replacing every vowel with a *, l*k* th*s. Luckily, I've been able to find the vowels that were removed.
// Given a censored string and a string of the censored vowels, return the original uncensored string.

function uncensor(string, vowels) {
  var stringArr = string.split("");
  var vowelsArr = vowels.split("");

  var indexItterator = -1;

  var returnArr = stringArr.map((char) => {
    if (char === "*") {
      indexItterator++;
      return vowelsArr[indexItterator];
    } else {
      return char;
    }
  });

  console.log(returnArr.join(""));
}

// uncensor("Wh*r* d*d my v*w*ls g*?", "eeioeo")
// ➞ "Where did my vowels go?"
// uncensor("abcd", "")
// ➞ "abcd"
// uncensor("*PP*RC*S*", "UEAE")
// ➞ "UPPERCASE"

// Date: May 14 2021
// Whats the missing Letter?
// Given a string of letters in the English alphabet, return the letter that's missing from the string. The missing letter will make the string be in alphabetical order (from A to Z).

function missingLetter(string) {
  var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  var array = string.split("");
  var startIndex;
  var endIndex;
  var missingChar;
  for (let i = 0; i < alphabet.length; i++) {
    const element = alphabet[i];
    if (element === array[0]) {
      startIndex = i;
    } else if (element === array[array.length - 1]) {
      endIndex = i;
    }
  }

  var compare = alphabet.join("").substring(startIndex, endIndex).split("");
  for (let j = 0; j < compare.length; j++) {
    const element = compare[j];
    if (element !== array[j]) {
      missingChar = element;
      break;
    }
  }

  if (missingChar === undefined) {
    console.log("No Missing Letter");
  } else {
    console.log(missingChar);
  }
}

// missingLetter("abdefg")
// ➞ "c"
// missingLetter("mnopqs")
// ➞ "r"
// missingLetter("tuvxyz")
// ➞ "w"
// missingLetter("ghijklmno")
// ➞ "No Missing Letter"

// Date: May 15 2021
// Find First Character that repeats
// Create a function that takes a string and returns the first character that repeats. If there is no repeat of a character, return "-1".

function firstRepeat(string) {
  var array = string.split("");
  var repeatLetter;
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    const subString = string.substring(i + 1);
    if(subString.split("").includes(element)) {
        repeatLetter = element;
        break;
    }
    else {
        repeatLetter = -1
    }
  }

  console.log(repeatLetter)
}

// firstRepeat("legolas");
// ➞ "l"

// firstRepeat("Gandalf");
// ➞ "a"

// firstRepeat("Balrog");
// ➞ "-1"

// firstRepeat("Isildur");
// ➞ "-1"
// Case sensitive "I" not equal to "i"



// Date: May 15 2021
// Lonely Numbers
// Given a number, insert duplicate digits on both sides of all digits which appear in a group of 1.



numbersNeedFriendsToo(123) 
// ➞ 111222333

numbersNeedFriendsToo(56657) 
// ➞ 55566555777

numbersNeedFriendsToo(33) 
// ➞ 33