/* Easy */
//----------------------------------------------------------------------
// 01.  Write a program to add 5 numbers. The value of number are 5, 13, 7, 21, 48 
// const arr = [5, 13, 7, 21, 48];

// const sum = arr.reduce((total, num) => {
//     return total + num
// })

// console.log(sum)

//----------------------------------------------------------------------
// 02. Write a program to take number input from user and determine whether its odd or even.
// const userInput = prompt("Enter Number")

// const result = userInput % 2===0 ? console.log("EVEN") : false;

//----------------------------------------------------------------------
// 03. Write a program to find the maximum and minimum out of two given numbers. The numbers are num1=129 and num2=251.
// const num1 = 129, num2 = 251;

// const result = num1 > num2 ? console.log(`num1 is maximum ${num1}`) : console.log(`num2 is maximum ${num2}`)

//----------------------------------------------------------------------
// 04. Write a program to find the maximum out of three given numbers. The numbers are num1=8, num2=23 and num3=17.
// const num1=8, num2=23, num3=17;

// const maxNum = Math.max(num1, num2, num3)
// console.log(`Max Number: ${maxNum}`)

//----------------------------------------------------------------------
// 05. Write a program to find the minimum out of three given numbers. The numbers are num1=35, num2=29 and num3=46.
// const num1=35, num2=29, num3=46;

// const minNum = Math.min(num1, num2, num3);
// console.log(`Min Number: ${minNum}`)

//----------------------------------------------------------------------
// 06. Write program to take a month as an input from the user and find out whether the month has 31 days or not.

// const getNumberOfDays = (month, year) => {
//     // Day 0 is last day in previous month
//     return new Date(year, month, 0).getDate()
// }
// console.log(getNumberOfDays(2, 2021))

//----------------------------------------------------------------------

/* Intermediate */
//----------------------------------------------------------------------
// 01. Fizzbuzz - Write a program to return an array from 1 to 100. But for every multiple of 3, 
//     replace the number with "Fizz", for every multiple of 5, replace the number with "Buzz" 
//     and for every multiples of 3 & 5, replace with "FizzBuzz".

// const fizzBuzz = (limit) => {
//     const fizzBuzzArr = [];
//     for(let i = 0; i <= limit; i++) {
//         if(i % 3 === 0 && i % 5 === 0) {
//             fizzBuzzArr.push("FizzBuzz")
//         } else if (i % 3 === 0) {
//             fizzBuzzArr.push("Fizz")
//         } else if (i % 5 === 0) {
//             fizzBuzzArr.push("Buzz")
//         } else {
//             fizzBuzzArr.push(i)
//         }
//     }
//     return(fizzBuzzArr)
// }

// console.log(fizzBuzz(100))

//----------------------------------------------------------------------
// 02. Write a program to take a number input from user and print multiplication table 12 times for that number.

// const mulTable = (number) => {
//     for(let i = 1; i <= 12; i++) {
//         console.log(number * i)
//     }
// }
// mulTable(2)

//----------------------------------------------------------------------
// 03. Write a program to return a Fibonacci series : 0,1,1,2,3,5,8,13,21....
// let num1 = 0, num2 = 1, num;
// const fibSeries = (number) => {
//     for(let i = 0; i < number; i++) {
//         console.log(num1)
//         num = num1 + num2;
//         num1 = num2;
//         num2 = num
//     }
// }
// console.log(fibSeries(10))

//----------------------------------------------------------------------
// 04. Write a program to take an input from a user and find its Factorial.

// const fact = (num) => {
//     if (num >=1 ) {
//         return num * fact(num-1)
//     } else {
//         return 1
//     }
// }

// console.log(fact(3))

//----------------------------------------------------------------------
// 05. Write a Program to take a number input from user and find if the number is Prime or not.

// let isPrime = true;

// const checkNumber = (num) => {
//     if (num <= 1) {
//         console.log(`Not Prime: ${num}`)
//     } else if(num > 1) {
//         for(let i = 2; i < num; i++) {
//             if(num % i === 0) {
//                 isPrime = !isPrime;
//                 break;
//             }
//         }
//         if(isPrime) {
//             console.log(`Is Prime: ${num}`)
//         } else {
//             console.log(`Not Prime: ${num}`)
//         }
//     } else {
//         console.log(`Not Prime: ${num}`)
//     }
// }
// checkNumber(21)

//----------------------------------------------------------------------
// 06. Print the 
// const loop = () => {
//     let str = ""
//     for(let i = 1; i < 5 ;i++) {
//         for(let j = 1; j < 5; j++) {
//            if (i >= j) {
//                str = str.concat("#")
//            }
//         }
//         str = str.concat("\n")
//     }
//     return str
// }

// console.log(loop())