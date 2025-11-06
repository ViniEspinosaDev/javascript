/*
setInterval() = executa uma função após um intervalo de tempo
especificado, executa para sempre
*/

let count = 5;

const interval = setInterval(() => {
   console.log(count--);

   if (count == 0) {
      console.log("Feliz ano novo!!");

      // Interrompe o intervalo de execuções
      clearInterval(interval);
   }
}, 1000);
