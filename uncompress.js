// Write a function, uncompress, that takes in a string as an argument. The input string will be formatted into multiple groups according to the following pattern:

// <number><char>

// for example, '2c' or '3a'.
// The function should return an uncompressed version of the string where each 'char' of a group is repeated 'number' times consecutively. You may assume that the input string is well-formed according to the previously mentioned pattern.

const uncompress = s => {
  // todo
  let numbers = "0123456789";
  let result = "";
  let i = 0;
  let j = 0;
  while (j < s.length) {
    if (numbers.includes(s[j])) {
      j += 1;
    } else {
      const num = Number(s.slice(i, j));
      for (let count = 0; count < num; count += 1) {
        result += s[j];
      }
      j += 1;
      i = j;
    }
  }

  return result;
};
// or

// const uncompress = (s) => {
//   let str = s.split('')
//   let copy = ''
//  let newStr = ''
//   for( let i = 0; i < s.length; i++) {
//     if(typeof +s.charAt(i) === 'number'){
//        for(let j = 0; j < s.length; j++){
//         if(Number.isNaN(+s.charAt(j))){
//         copy = str.slice(i , j ).join('')
//          i = j + 1
//         for(let k = copy; k > 0; k--){
//             newStr += str[j]
//         }
//       }
//     }
//     }
//   }
//   return newStr
//   }

uncompress("2c3a1t"); // -> 'ccaaat'
uncompress("4s2b"); // -> 'ssssbb'
uncompress("2p1o5p"); // -> 'ppoppppp'
uncompress("3n12e2z"); // -> 'nnneeeeeeeeeeeezz'
uncompress("127y"); // ->'yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy'
