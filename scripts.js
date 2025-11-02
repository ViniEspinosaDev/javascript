const book = {
   title: "Objetos imutáveis",
   category: "Javascript",
   author: {
      name: "Rodrigo",
      email: "rodrigo@email.com",
   },
};

const updatedBook = {
   ...book,
   title: "Criando um front-end moderno com HTML",
   category: "HTML",
   type: "Programming",
};

// Original intacto
console.log(book);

// Modificado
console.log(updatedBook);

// Utilizando operador de desestruturação (rest operator) para remover propriedades
const { type, ...bookWithoutCategory } = book;
console.log(bookWithoutCategory);
