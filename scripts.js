/*
   every() - testa se todos os elementos
   do array passam na condição e retorna
   um valor boolean
*/

const ages = [12, 18, 19, 23, 25];

// Retorna undefined
const result = ages.every((age) => age >= 18);
console.log(result);
