// Shallow freezing (congelamento superficial): congela as mudanças...
const book = {
   title: "Objetos imutáveis",
   category: "Javascript",
   author: {
      name: "Rodrigo",
      email: "rodrigo@email.com",
   },
};

// O js em si não impões restrições à modificação dos objetos
//book.category = "HTML"; // MODIFICA

// Congela o objeto e impede a modificação
//Object.freeze(book);
//book.category = "CSS"; // NÃO MODIFICA

//book.author.name = "João"; // MODIFICA, POIS É OBJETO ANINHADO
//book.author.email = "joao@email.com"; // MODIFICA, POIS É OBJETO ANINHADO

// Função que faz o Deep Freeze recursivamente em todas os propriedades, objetos e funcoes do objeto
function deepFreeze(object) {
   const props = Reflect.ownKeys(object);

   for (const prop of props) {
      const value = object[prop];

      if ((value && typeof value === "object") || typeof value === "function") {
         deepFreeze(value);
      }
   }

   return Object.freeze(object);
}

deepFreeze(book);

book.title = "NOVO TITULO";
book.author.name = "NOVO AUTOR";
book.author.email = "NOVO EMAIL";

console.log(book);
