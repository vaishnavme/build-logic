// const add = (num2, num2) => {
//     console.log(num1 + num2)
// }


// const simpleIntrest = (princial, time, rate) => {
//     const simIntrest = (princial * time * rate) / 100;
//     return simIntrest
// }
// console.log(simpleIntrest(100,2,6))


// const kineticEnergy = (mass, volume) => {
//     const energy = 0.5 * mass * volume * volume
//     return energy
// }

// console.log(kineticEnergy(100, 300))

// const fToC = (temperature) => {
//     const convertTemp = (temperature - 32) * 5 / 9
//     return convertTemp
// }

// console.log(fToC(56))

// const calcCube = (side) => {
//     const area = side * side;
//     const perimeter = 4 * side;
//     const surfaceArea = 6 * side * side;
//     const volume = side * side * side;

//     console.log(`Area: ${area} \nPerimeter: ${perimeter} \nSurface Area: ${surfaceArea} \nVolume: ${volume}\n`)
// }

// calcCube(6)

// const profitLoss = (costP, sellP) => {
//     if(costP > sellP) {
//         console.log(costP - sellP, "Loss")
//     } else {
//         console.log(sellP - costP, "Profit")
//     }
// }
// profitLoss(2500,5000)


// const sumOfNatural = (limit) => {
//     let total = 0;
//     for(let i = 1; i <=100; i++) {
//         total = total + i
//     }
//     return total
// }

// console.log(sumOfNatural(100))

// const oddNums = (maxLimit) => {
//     for(let i = 0; i < maxLimit; i++) {
//         if(i % 2 !== 0) {
//             console.log(i)
//         }
//     }
// }

// oddNums(100)

// const sumOfString = (strNum) => {
//     let total = 0;
//     while(strNum) {
//         total += strNum % 10
//         strNum = Math.floor(strNum / 10)
//     }
//     return total
// }
// console.log(sumOfString(1234))


// const reverseNum = (inputNum) => {
//     inputNum = inputNum + ""
//     return inputNum.split("").reverse().join("");
// }

// console.log(reverseNum(1234))

// const decimalToBinary = decimal => {
//     let binaryNum = [];
//     while (decimal > 0) {
//         binaryNum = [decimal % 2, ...binaryNum];
//         decimal = Math.floor(decimal / 2)
//     }
//     return binaryNum.join(" ");
// }

// console.log(decimalToBinary(6))

// const octalToDecimal = octal => {
//     let decimal = 0, i = 0;
//     while(octal > 0) {
//         decimal += (octal % 10) * Math.pow(8, i);
//         octal = Math.floor(octal / 10);
//         i += 1;
//     }
//     return decimal
// }

// console.log(octalToDecimal(116))