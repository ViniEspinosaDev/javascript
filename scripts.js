/*
 Promisse = Promessa, retorno de uma chamada assincrona,
 que pode ser resolvida ou rejeitada. Caso sucesso, resolve. Caso falha, rejeita
*/

function asyncFunction() {
   return new Promise((resolve, reject) => {
      // Simula uma operação assíncrona

      setTimeout(() => {
         const isSuccess = false;

         if (isSuccess) {
            resolve("A operação foi concluída com sucesso");
         } else {
            reject("Algo deu errado!");
         }
      }, 3000);
   });
}

// Visualizando que o retorno é uma promisse
//console.log(asyncFunction()); // Promise {<pending>}

console.log("Executando função assíncrona...");

asyncFunction()
   .then((response) => {
      console.log("Sucesso: ", response);
   })
   .catch((error) => {
      console.log("Erro: ", error);
   })
   .finally(() => {
      console.log("Fim da execução");
   });
