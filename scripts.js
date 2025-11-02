/*
   every() - testa se ao menos um dos elementos
   do array passam na condição e retorna
   um valor boolean
*/

const ages = [12, 18, 19, 23, 25];

// Retorna undefined
const result = ages.some((age) => age < 18);
console.log(result);
