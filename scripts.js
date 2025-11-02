/*
   reduce() - o método reduce é utilizado para
   reduzir um array a um único valor

   parâmetros:
   - array original (values)
   - acumulador (accumulator)
   - valor da iteração (currentValue)
   - valor inicial (0)
   - index (index da iteração atual - opcional)
*/

const values = [10, 20, 30, 40, 50];

const sum = values.reduce((accumulator, currentValue, index) => {
   console.log("Acumulador: ", accumulator);
   console.log("Current value: ", currentValue);
   console.log("Index: ", index);

   console.log("Soma", accumulator + currentValue);
   console.log("########");

   return accumulator + currentValue;
}, 0);

console.log("RESULTADO: ", sum);
