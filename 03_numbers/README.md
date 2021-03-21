# Numbers

1. Write a program to input 2 numbers and display the sum of the numbers to the console.

    ```
    Input Number 1: 20
    Input Number 2: 40
    Sum : 60
    ```

    ```
    const add = (num2, num2) => {
        return num1 + num2
    }
    console.log(add(20, 40))

    // Output
    // 60
    ```
1. Write a JavaScript program to calculate the simple interest given P,R,T with the given formula.
   Formula:
   `SI = (P * T * R) / 100`
   Where:
   P = principal amount
   T = time
   R = rate
   SI = simple interest

    ```
    Input: P=100, R=6%, T=2
    Output: 12
    ```

    ```
    const simpleIntrest = (princial, time, rate) => {
        const simIntrest = (princial * time * rate) / 100;
        return simIntrest
    }
    console.log(simpleIntrest(100,2,6))
    ```

1. Write a program to calculate the kinetic energy of a body with mass 'm' and volume 'v'.

    Formula : `0.5 * m * v * v`

    ```
    const kineticEnergy = (mass, volume) => {
        const energy = 0.5 * mass * volume * volume
        return energy
    }

    console.log(kineticEnergy(100, 300))
    ```

1. Write a program to convert Fahrenheit to Celsius. For Celsius to Fahrenheit conversion use:
   `T = 9*T/5 + 32`
   'T' is the temperature on the Celsius scale.

    ```
    Input: 56
    Output: 13.33333
    ```

    ```
    const fToC = (temperature) => {
        const convertTemp = (temperature - 32) * 5 / 9
        return convertTemp
    }

    console.log(fToC(56))
    ```

1. Calculate the area, perimeter of a s1.re of side 'a'. Also, calculate the surface area and the volume of a cube of side 'a'.

    Formula :

    `Area: a*a`

    `Perimeter: 4*a`

    `Surface Area: 6*a*a`

    `Volume: a*a*a`


    ```

    const calcCube = (side) => {
        const area = side * side;
        const perimeter = 4 * side;
        const surfaceArea = 6 * side * side;
        const volume = side * side * side;

        console.log("Area: ${area} \nPerimeter: ${perimeter} \nSurface Area: ${surfaceArea} \nVolume: ${volume}\n`)
    }

    calcCube(6)

    ```

1. Given the Cost Price(CP) and Selling Price(SP) of a product. Write a Program to Calculate the Profit or Loss.

    ```
    Input: CP = 1500, SP = 2000
    Output: 500 Profit

    Input: CP = 3125, SP = 1125
    Output: 2000 Loss
    ```

    ```
    const profitLoss = (costP, sellP) => {
        if(costP > sellP) {
            console.log(costP - sellP, "Loss")
        } else {
            console.log(sellP - costP, "Profit")
        }
    }
    profitLoss(2500,5000)
    ```

1. Write a program to calculate sum of N natural digits, as input by the users?

    ```
    Enter a positive integer: 100
    Sum = 5050
    ```

    ```

    const sumOfNatural = (limit) => {
        let total = 0;
        for(let i = 1; i <=100; i++) {
            total = total + i
        }
        return total
    }

    console.log(sumOfNatural(100))
    ```
    
1. Write a Program to Print N Odd Number in Descending Order.

    ```
    Input : 4
    Output : 1
    3
    5
    7
    ```

    ```
    const oddNums = (maxLimit) => {
        for(let i = 0; i < maxLimit; i++) {
            if(i % 2 !== 0) {
                console.log(i)
            }
        }
    }

    oddNums(100)

    ```

1. Write a JavaScript program to compute the sum of all digits that occur in a given string.

    ```
    Input: 1234
    Output: 1+2+3+4 = 10
    ```
    ```
    const sumOfString = (strNum) => {
        let total = 0;
        while(strNum) {
            total += strNum % 10
            strNum = Math.floor(strNum / 10)
        }
        return total
    }
    console.log(sumOfString(1234))

    ```

1. Write a JavaScript program that reverses a number.

    Example:

    ```
    Input:  32243;
    Output:  34223
    ```

1. Write a Program to cyclically Rotate a Number by X positions in the left direction, as provided by the user.

    Example-

    ```
    Enter a Number : 1234
    Enter the Number of Rotations : 2
    Output : 3412
    ```

    ```
    const reverseNum = (inputNum) => {
        inputNum = inputNum + ""
        return inputNum.split("").reverse().join("");
    }

    console.log(reverseNum(1234))
    ```
    
1. Write a Program to convert Decimal to Binary.

    ```
    Enter the number to convert: 5
    Binary of Given Number is=101
    ```

    Follow up Question : Write a Program to Convert Octal to Decimal.

    ```
    Enter an octal number: 116
    Octal of Given Number = 78 in decimal
    ```

    ```
    const decimalToBinary = decimal => {
        let binaryNum = [];
        while (decimal > 0) {
            binaryNum = [decimal % 2, ...binaryNum];
            decimal = Math.floor(decimal / 2)
        }
        return binaryNum.join(" ");
    }

    console.log(decimalToBinary(6))


    
    const octalToDecimal = octal => {
        let decimal = 0, i = 0;
        while(octal > 0) {
            decimal += (octal % 10) * Math.pow(8, i);
            octal = Math.floor(octal / 10);
            i += 1;
        }
        return decimal
    }

    console.log(octalToDecimal(116))

    ```
