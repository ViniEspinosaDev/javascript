/*
   find() - retorna o valor do primeiro elemento
   do array que satisfizer a condição. Caso contrário,
   undefined é retornado
*/

const numbers = [4, 6, 8, 12, 13];

// Retorna undefined
const greaterThan1000 = numbers.find((value) => value > 1000);
console.log(greaterThan1000);

// Retorna primeiro elemento do array que condiz com a validação
const greaterThan4 = numbers.find((value) => value > 4);
console.log(greaterThan4);

// Exemplo com objetos
const fruits = [
   { name: "Apple", quantity: 23 },
   { name: "Banana", quantity: 13 },
   { name: "Orange", quantity: 33 },
];

const result = fruits.find((fruit) => fruit.quantity > 20);
console.log(result);
