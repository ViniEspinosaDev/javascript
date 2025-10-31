/* 
    Conversão de tipos
    - feito de forma consciente
*/

console.log(typeof 9); // number
console.log(typeof "9"); // string
console.log(typeof Number("9")); // number

let age = 18;
console.log(typeof age.toString()); // string
console.log(typeof String(age)) // string

let option = 1
console.log(option)
console.log(Boolean(option))
console.log(typeof option)
console.log(typeof Boolean(option))

/* 
    Coersão de tipo 
    - acontece de forma automática (implicitamente)
*/
console.log("10" + 5) // 105
console.log(typeof ("10" + 5)) // string