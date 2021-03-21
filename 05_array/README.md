# Arrays

## beginner - intermediate

1. Find sum of an array and display the output . Example [10,4,5,2,5,6,9].

    ```
    const arr = [10,4,5,2,5,6,9];

    const sumOf = (acc, val) => {
        return acc + val
    }

    console.log(arr.reduce(sumOf))
    ```

2. Find average of an array and display the output.

    ```
    const arr = [10,4,5,2,5,6,9];

    const sumOf = (acc, val) => {
        return acc + val
    }

    console.log(arr.reduce(sumOf)/arr.length)
    ```

3. Find maximum and minimum of an array.

    ```
    const minMax = arr => {
        const min = Math.min(...arr)
        const max = Math.max(...arr)
        return {min, max}
    } 

    console.log(minMax([10,4,5,2,5,6,9]))
    ```

4. Find Median and Mode of an array.
    - Median : (N+1/2)th term.
    - Mode : Most repeating term
5. Find sum of two arrays.
    - [3,5,2,9,4] = 3+5+2+9+4 = 23
    - [6,2,8,1,3] = 6+2+8+1+3 = 20
    - Final Output : 20+23 = 43

    ```
    const sumOfTwo = (arr1, arr2) => {
        let newArr = arr1.concat(arr2)
        return newArr.reduce((acc, val) => acc + val)
    }

    console.log(sumOfTwo([3,5,2,9,4],[6,2,8,1,3]))

    ```

6. Find number of constants and vowels in a string.

    ```
    const findVowels = str => {
        return str.match(/[aeiou]/g).length
    }

    console.log(findVowels("apple"))

    const findVowels = str =>{
        const vowels = "aeiouAEIOu"
        let count = 0;
        for(let i = 0; i< str.length; i++) {
            if(vowels.indexOf(str[i]) !== -1) {
                count += 1
            }
        }
        return count
    }

    console.log(findVowels("apple"))
    ```

7. Shift an array by X to right.
    - Example [1,2,3,4,5] after shifting to right [5,1,2,3,4]

## Advanced

1. Find the sum of two matrix.

    ```
    const sumOfMatrix = (mat1, mat2) => {
        let sum = [];
        for(let i = 0; i < mat1[0].length; i++) {
            for(let j = 0 ; j < mat1.length; j++) {
                if(j===0){
                    sum[i] = [];
                }
                sum[i][j] = mat1[i][j] + mat2[i][j];
            }
        }
        return sum;
    }

    console.log(sumOfMatrix([[1,2],[3,4]],[[5,6],[7,8]]))

    ```

1. Display transpose of matrix. Explaination https://www.varsitytutors.com/linear_algebra-help/the-transpose

    ```
    const transposeMat = mat => mat[0].map((i,j) => mat.map(i => i[j]));
    console.log(transposeMat([[1,2],[3,4]]))
    ```
1. Find Identity matrix. Explanation https://www.varsitytutors.com/hotmath/hotmath_help/topics/identity-matrix
