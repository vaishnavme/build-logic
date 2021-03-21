// const upperCase = str => {
//     return str.toUpperCase()
// }
// console.log(upperCase("hello"))

// const attachString = (firstStr, secondStr) => {
//     return secondStr.concat(firstStr)
// }

// console.log(attachString("Good", "Morning"))

// const stringLength = str => {
//     return str.length;
// }

// console.log(stringLength("hello"))

// const parseStr = str => {
//     return parseInt(str)
// }

// console.log(parseStr("1234"))

// const deleteVowels = str => {
//     return str.replace(/[aeiou]/g, '')
// }

// console.log(deleteVowels("apple"))

// const checkAlpha = str => {
//     const exp = /^[0-9a-z-A-Z]+$/;
//     return str.match(exp) ? console.log("Alphanumeric") : console.log("Not Alphanumeric")
// }

// checkAlpha("Password1234")

// const checkStr = (arr) => {
//     let longest = arr.reduce((acc, val) => acc.length > val.length ? acc : val);
//     let smallest = arr.reduce((acc, val) => acc.length < val.length ? acc : val)
//     return {longest, smallest}
// }

// console.log(checkStr(["hello", "cool", "vaishnav"]))

// const numOfVowels = str => {
//     return str.match(/[aeiou]/g).length
// }

// console.log(numOfVowels("apple"))

// const lengthOfStr = str => {
//     let count = 0;
//     while(str[count] !== undefined) {
//         count += 1;

//     }
//     return count > 7 ? "Greater" : "Smaller"
// }

// console.log(lengthOfStr("hello"))

// const checkPalindrome = alphaStr => {
//     let alphaString = alphaStr.toLowerCase()
//     let start = 0;
//     let end = alphaStr.length - 1;
//     while(start < end) {
//         let l_char = alphaString[start];
//         let r_char = alphaString[end];
//         if(l_char == r_char) {
//             start++;
//             end--;
//         } else {
//             return false
//         }
//     }
// }


// console.log(checkPalindrome("012aba2102"))


// const hashMark = inputStr => {
//     let str = inputStr.slice(0, -4)
//     let mask = ''
    
//     for(var i = (inputStr.length)-3; i<=inputStr.length; i++){
//         mask += '#'
//     }
//     return str + mask
// }

// console.log(hashMark("5565534276455423"))

// const capital = sentence => {
//     let words = sentence.split(" ");
//     for(let i = 0; i < words.length; i++) {
//         words[i] = words[i][0].toUpperCase() + words[i].substr(1);
//         //console.log(words)
//     }
//     return words.join(" ")
// }

// console.log(capital("tic tac toe is a fun game"))

// const addToBig = (str1, str2) => str1.length > str2.length ? str1 + str2 : str2 + str1
// console.log(addToBig("hi", "morning"))

// console.log(rep("programming camp are amazing enough programming", "programming"))

// const removeTime = str => {
//     return str.split(",")[0];
// }

// console.log(removeTime("Wed April 15, 7pm"))

// const replaceChar = (str, char1, char2) => [...str].map((char) => char === char1 ? char2: char).join('');

// console.log(replaceChar("abcdefg","e","z"))

// const removeSpace = str => str.split(" ").join("")
// console.log(removeSpace("Good Morning !"))

// const reverse = str => str.split(" ").reverse().join(" ");
// console.log(reverse("Welcome to NeoG Camp"))

// const removeOcr = (str, ocr) => str.split(" ").filter(word => word !== ocr).join(" ");
// console.log(removeOcr("programming camp are amazing", "programming"))