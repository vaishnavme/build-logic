

// const sumOfTwo = (arr1, arr2) => {
//     let newArr = arr1.concat(arr2)
//     return newArr.reduce((acc, val) => acc + val)
// }

// console.log(sumOfTwo([3,5,2,9,4],[6,2,8,1,3]))


// const findVowels = str => {
//     return str.match(/[aeiou]/g).length
// }

// console.log(findVowels("apple"))

// const findVowels = str =>{
//     const vowels = "aeiouAEIOu"
//     let count = 0;
//     for(let i = 0; i< str.length; i++) {
//         if(vowels.indexOf(str[i]) !== -1) {
//             count += 1
//         }
//     }
//     return count
// }

// console.log(findVowels("apple"))

// const sumOfMatrix = (mat1, mat2) => {
//     let sum = [];
//     for(let i = 0; i < mat1[0].length; i++) {
//       for(let j = 0 ; j < mat1.length; j++) {
//         if(j===0)
//             sum[i] = [];
//         sum[i][j] = mat1[i][j] + mat2[i][j];
//       }
//     }
//     return sum;
//   }

// console.log(sumOfMatrix([[1,2],[3,4]],[[5,6],[7,8]]))

// const transposeMat = mat => mat[0].map((i,j) => mat.map(i => i[j]));
// console.log(transposeMat([[1,2],[3,4]]))