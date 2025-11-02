/*
 spread (espalhar) permite que um objeto iterável, como uma 
 expressão de array ou uma string seja expandido 
 para ser usado onde zero ou mais argumentos
*/

const numbers = [1, 2, 3];
console.log(numbers);

console.log(...numbers);

//
const data = [
   {
      name: "João",
      email: "joao@email.com",
      avatar: "joao.png",
   },
   {
      name: "Vini",
      email: "vini@email.com",
      avatar: "vini.png",
   },
   {
      name: "Ana",
      email: "ana@email.com",
      avatar: "ana.png",
   },
];

console.log(data)
console.log(...data)
