/*
   Mop() - Chama a função 'callback' recebida por
   parâmetro para cada elemento do array original,
   em ordem, e constrói um novo array com base nos
   retornos de cada chamada. E no final, devolve o
   novo array.
*/

const products = ["Teclado", "Mouse", "Monitor"];

// Percorrer os itens do array
products.map((product, index) => {
   console.log(`Index: ${index} - Product: ${product}`);
});

// Sintaxe reduzida
products.map((product, index) => console.log(`Index: ${index} - Product: ${product}`));

// Utilizando o novo objeto retornado
const formatted = products.map((product) => {
   // return product.toUpperCase();

   return {
      id: Math.random(),
      description: product,
   };
});

console.log(...formatted);
