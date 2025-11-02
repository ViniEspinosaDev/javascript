/*
   findIndex() - retorna o índice no array do primeiro
   elemento que satisfizer a condição. Caso contrário, 
   retorna -1, indicando que nenhum elemento passou no teste
*/

const numbers = [4, 6, 8, 12, 13];

const index = numbers.findIndex((value) => value > 4);
console.log(`Index: ${index} - Value: ${numbers[index]}`)