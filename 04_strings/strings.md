# Strings

## Beginner to Intermediate

1. Write a program that converts the string into uppercase

    ```
    const upperCase = str => {
        return str.toUpperCase()
    }
    console.log(upperCase("hello"))
    ```

1. Write a program that reads two strings and append first string to the second. So if first string is Good second string is Morning , the program should print MorningGood

    ```
    const attachString = (firstStr, secondStr) => {
        return secondStr.concat(firstStr)
    }

    console.log(attachString("Good", "Morning"))
    ```

1. Program that reads string and count number of characters present in the string

    ```
    const stringLength = str => {
        return str.length;
    }

    console.log(stringLength("hello"))
    ```

1. Write a program that converts string like "124" to 124

    ```
    const parseStr = str => {
        return parseInt(str)
    }

    console.log(parseStr("1234"))
    ```

1. Write a program to delete all vowels from a string. Assume string is not more than 80 characters long

    ```
    const deleteVowels = str => {
        return str.replace(/[aeiou]/g, '')
    }

    console.log(deleteVowels("apple"))
    ```

1. Write a program to check whether the string is alphanumeric or not , eg:batman@45 contains digit 45

    ```
    const checkAlpha = str => {
        const exp = /^[0-9a-z-A-Z]+$/;
        return str.match(exp) ? console.log("Alphanumeric") : console.log("Not Alphanumeric")
    }

    checkAlpha("Password1234")
    ```

1. A program that reads three strings and prints the longest and smallest one

    ```
    const checkStr = (arr) => {
        let longest = arr.reduce((acc, val) => acc.length > val.length ? acc : val);
        let smallest = arr.reduce((acc, val) => acc.length < val.length ? acc : val)
        return {longest, smallest}
    }

    console.log(checkStr(["hello", "cool", "vaishnav"]))
    ```

1. A program that counts number of vowels and consonants in a String?

    ```
    const numOfVowels = str => {
        return str.match(/[aeiou]/g).length
    }

    console.log(numOfVowels("apple"))
    ```

1. Write a program which receives a string str that calculates the length of a string and return true if the length is greater than 7 without using strlen()

    ```
    const lengthOfStr = str => {
        let count = 0;
        while(str[count] !== undefined) {
            count += 1;

        }
        return count > 7 ? "Greater" : "Smaller"
    }

    console.log(lengthOfStr("hello"))
    ```

1. Write a program that takes two strings and copies smaller string into bigger string

    ```
    const addToBig = (str1, str2) => str1.length > str2.length ? str1 + str2 : str2 + str1
    console.log(addToBig("hi", "morning"))
    ```

1. Given a string, determine if it is a palindrome, considering only alphanumeric characters

    ```
    const checkPalindrome = alphaStr => {
        let alphaString = alphaStr.toLowerCase()
        let start = 0;
        let end = alphaStr.length - 1;
        while(start < end) {
            let l_char = alphaString[start];
            let r_char = alphaString[end];
            if(l_char == r_char) {
                start++;
                end--;
            } else {
                return false
            }
        }
    }


    console.log(checkPalindrome("012aba2102"))
    ```

1. For a given input string(str), write a function to print all the possible substrings.Without using substr method

1. Write a program that removes the time from the given date string "Wed April 15, 7pm". It should return only the date without the time.

    ```
    const removeTime = str => {
        return str.split(",")[0];
    }

    console.log(removeTime("Wed April 15, 7pm"))

    ```

1. Write a program that masks all but last four characters of the string "5565534276455423" to '#'

    ```
    const hashMark = inputStr => {
        let str = inputStr.slice(0, -4)
        let mask = ''
        
        for(var i = (inputStr.length)-3; i<=inputStr.length; i++){
            mask += '#'
        }
        return str + mask
    }

    console.log(hashMark("5565534276455423"))
    ```

1. Given a string "tic tac toe is a fun game" convert the first 6 characters to capital case

    ```
    const capital = sentence => {
        let words = sentence.split(" ");
        for(let i = 0; i < words.length; i++) {
            words[i] = words[i][0].toUpperCase() + words[i].substr(1);
            //console.log(words)
        }
        return words.join(" ")
    }

    console.log(capital("tic tac toe is a fun game"))
    ```

## Advance

1. Given an input string S and two characters c1 and c2, you need to replace every occurrence of character c1 with character c2 in the given string

    ```
    const replaceChar = (str, char1, char2) => [...str].map((char) => char === char1 ? char2: char).join('');

    console.log(replaceChar("abcdefg","e","z"))
    ```

1. Given an input string S that contains multiple words, you need to remove all the spaces present in the input string. There can be multiple spaces present after any word

    ```
    const removeSpace = str => str.split(" ").join("")
    console.log(removeSpace("Good Morning !"))
    ```

1. Reverse the given string word wise. That is, the last word in given string should come at 1st place, last second word at 2nd place and so on. Individual words should remain as it is. example: Input : Welcome to NeoG Camp → Camp NeoG to Welcome

    ```
    const reverse = str => str.split(" ").reverse().join(" ");
    console.log(reverse("Welcome to NeoG Camp"))
    ```

1. A program that counts the value of each character and prints the most repeated character?

1. Write a program to toggle case of each character of the string "good afternoon" (example: "neogcamp" ⇒ "nEoGcAmP" )

1. Given a string "how was your day?" and a word "how", write a program that removes the occurrence of the specified word from given sentence. ( input: string⇒"programming camp are amazing",word⇒ "programming"; output:" camp are amazing")

    ```
    const removeOcr = (str, ocr) => str.split(" ").filter(word => word !== ocr).join(" ");
    console.log(removeOcr("programming camp are amazing", "programming"))
    
    ```