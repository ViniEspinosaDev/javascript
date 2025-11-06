/*
 Promisse = Promessa, retorno de uma chamada assincrona,
 que pode ser resolvida ou rejeitada. Caso sucesso, resolve. Caso falha, rejeita
*/

function asyncFunction() {
   return new Promise((resolve, reject) => {
      // Simula uma operação assíncrona

      setTimeout(() => {
         const isSuccess = true;

         if (isSuccess) {
            resolve("A operação foi concluída com sucesso");
         } else {
            reject("Algo deu errado!");
         }
      }, 3000);
   });
}

// const fetchArrowFunction = async () => {
//    const response = await asyncFunction()
//    console.log()
// }

async function fetch() {
   try {
      const response = await asyncFunction();
      console.log("Sucesso: ", response);
   } catch (error) {
      console.log("Erro: ", error);
   } finally {
      console.log("Fim do processo");
   }
}

fetch();
