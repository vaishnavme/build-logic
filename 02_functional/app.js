// Easy
// 01. Given a and b, your function should return the value of a<sup>b</sup>  Example: Input: power(2,3) ––>Output: 8

// const power = (base, power) => {
//     return base**power
// } 

// console.log(power(2,3))

//-----------------------------------------------------------------------------------------
// 02. Given length of a regular hexagon, your function should return area of the hexagon. Example: Input: areaOfHexagon(10) ––> Output: 259.80

// const areaOfHexagon = (side) => {
//     const area = (3/2) * Math.sqrt(3) * (side*side)
//     return parseFloat(area).toFixed(2);
// }

// console.log(areaOfHexagon(10))

//-----------------------------------------------------------------------------------------
// 03. Given a sentence, your functions should return the number of words in the sentence. Example: Input: noOfWords(We are neoGrammers) ––> Output: 3
 
// const noOfWords = (sentence) => {
//     const wordCount = sentence.split(" ").length;
//     return wordCount
// }

// console.log(noOfWords("We are neoGrammers"))

//-----------------------------------------------------------------------------------------
// 04. Given n numbers, your function should return the minimum of them all. The number of parameters won't be accepted from user. Example: Input: findMin(3,5) ––> Output: 3 Input: findMin(3,5,9,1) ––> Output: 1 *(Hint: Lookup rest parameters in JavaScript)*

// const findMin = (...nums) => {
//     const minNumber = Math.min(...nums)
//     return minNumber
// }

// console.log(findMin(3, 5))
// console.log(findMin(3, 5, 2, 9, 1))

//-----------------------------------------------------------------------------------------
// 05. Given n numbers, your function should return the maximum of them all. The number of parameters won't be accepted from user. Example: Input: findMax(3,5) ––> Output: 5 Input: findMax(3,5,9,1) ––> Output: 9 *(Hint: Lookup rest parameters in JavaScript)*

// const findMax = (...nums) => {
//     const maxNumber = Math.max(...nums)
//     return maxNumber
// } 

// console.log(findMax(3, 5))
// console.log(findMax(3, 5, 2, 9, 1))

//-----------------------------------------------------------------------------------------
// 06. Given three angles of a triange, your function should return if it is a scalen, isosceles, equilateral triangle or not a triangle at all. Example: Input: typeOfTriangle(30, 60, 90) ––> Output: Scalen Triangle

// const typeOfTriangle = (ang1, ang2, ang3) => {
    
//     if(ang1 + ang2 + ang3 === 180) {
//         if(ang1 == 60 && ang2 ==60 && ang3 == 60) {
//             return "Equilateral Triangle"
//         }
//         if(ang1 == 90 || ang2 ==90 || ang3 == 90) {
//             return "Right Angle Triangle"
//         }
//         if(ang1 == ang2 || ang1 == ang3 || ang2 == ang3) {
//             return "Isosceles Triangle"
//         }
//         if(ang1 != ang2 || ang2 != ang3 || ang3 != ang1) {
//             return "Scalene Triangle"
//         }
//     } else {
//         return "No Triangle"
//     }
// }

// console.log(typeOfTriangle(60, 60, 60))

//-----------------------------------------------------------------------------------------
// Intermediate
// 01. Given an array, your function should return the length of the array. Example: Input: arrayLength([1,5,3,7,8]) ––> Output: 5

// const findLength = (arr) => {
//     const arrLength = arr.length
//     return arrLength
// }

// console.log(findLength([3,5,9,1,5]))

//-----------------------------------------------------------------------------------------
// 02.Given an array and an item, your function should return the index at which the item is present. Example: Input: indexOf([1,6,3,5,8,9], 3) ––> Output: 2
// const findIndexPos = (arr, num) => {
//     for(let i = 0; i < arr.length; i++) {
//         if(num === arr[i]) {
//             return i;
//         }
//     }
// }

// console.log(findIndexPos([8,5,4,2,6,7], 5))

//-----------------------------------------------------------------------------------------
// 03. Given an array and two numbers, your function should replace all entries of first number in an array with the second number. Example: Input: replace([1,5,3,5,6,8], 5, 10) ––> Output: [1,10,3,10,6,8]

// const replaceInst = (arr, num, repl) => {
//     console.log("before: ",arr)
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] === num) {
//             arr[i] = repl
//         }
//     }
//     console.log("after: ", arr)
// }

// replaceInst([1,5,3,5,6,8], 5, 10)

//-----------------------------------------------------------------------------------------
// 04. Given two arrays, your function should return single merged array. Example: Input: mergeArray([1,3,5], [2,4,6]) ––> Output: [1,3,5,2,4,6]

// const mergeArray = (arr1, arr2) => {
//     return arr1.concat(arr2)
// }
// console.log(mergeArray([1,3,5], [2,4,6]))

//-----------------------------------------------------------------------------------------
// 05. Given a string and an index, your function should return the character present at that index in the string. Example: Input: charAt("neoGcamp", 4) ––> Output: c

// const charPosition = (str, index) => {
//     const char = str.charAt(index)
//     return char
// }
// console.log(charPosition("neoGcamp", 4))
//-----------------------------------------------------------------------------------------
// 06 Given two dates, your function should return which one comes before the other.  
//**Example:**  
//**Input:** `minDate('02/05/2021', ' 24/01/2021')Output: 24/01/2021

// const minDate = (inDate1, inDate2) => {
//     let date1 = new Date(inDate1.split("/").join("-"));
//     let date2 = new Date(inDate2.split("/").join("-"));
//     return date1 < date2 ? inDate1 : inDate2
// }
// console.log(minDate('02/05/2021', '24/01/2021'))

//-----------------------------------------------------------------------------------------

// ADVANCE
// 01. Given a sentence, return a sentence with first letter of all words as capital. Example: Input: toSentenceCase('we are neoGrammers') ––> Output: We Are NeoGrammers

// const capWord = (sentance) => {
//     const words = sentance.split(" ")
//     console.log(words)
//     for(let i = 0; i < words.length; i++) {
//         words[i] = words[i][0].toUpperCase() + words[i].substr(1)
//     }
//     return words.join(" ")
// }

// console.log(capWord("we are gamers"))

//-----------------------------------------------------------------------------------------
// 02. Given an array of numbers, your function should return an array in the ascending order. Example: Input: sortArray([100,83,32,9,45,61]) ––> Output: [9,32,45,61,83,100]

// const sortArray = (arr) => {
//     let sort = [];
//     console.log(arr)
//     for(let i = 0; i < arr.length; i++) {
//         for(let j = 0; j < arr.length-i-1; j++) {
//             if(arr[j] > arr[j+1]) {
//                 temp = arr[j];
//                 arr[j] = arr[j+1];
//                 arr[j+1] = temp;
//             }
//         }
//     }
//     //console.log(arr)
//   return arr
// }

// console.log(sortArray([100,83,32,9,45,61]))

//-----------------------------------------------------------------------------------------
// 03. Write a function which generates a secret code from a given string, by shifting characters of alphabet by N places. Example: Input: encodeString("neogcamp", 2) ––> Output: pgqiecor Explanation: 2 represents shifting alphabets by 2 places. a –> c, b –> d, c –> e and so on.

// const encodeString = (message, value) => {
//     strPrecode = message.toLowerCase();

//     var result = '';
//     var charcode = 0;

//     for (var i = 0; i < strPrecode.length; i++) {
//         charcode = (strPrecode[i].charCodeAt()) + value;
//         result += String.fromCharCode(charcode);
//     }
//     return result;
// }

// console.log(encodeString("neogcamp", 2))

//-----------------------------------------------------------------------------------------
//Given a sentence, your function should reverse the order of characters in each word, keeping same sequence of words.  
//**Example:**  
//**Input:** `reverseCharactersOfWord('we are neoGrammers')` –––> **Output:** `ew era sremmarGoen`

// const reverseCharactersOfWord = (str) => {
//     let words = str.split(" ");
//     let output = "";
//     for (word of words) {
//       output += word.split("").reverse().join("") + " ";
//     }
//     return output;
//   }
//   console.log(reverseCharactersOfWord("we are neoGrammers"));