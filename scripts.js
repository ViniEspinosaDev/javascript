// objeto vazio
console.log("--- Objeto vazio---");
const emptyObj = {};

console.log(emptyObj);
console.log(typeof emptyObj);

// objeto com propriedades e métodos
console.log("--- Objeto com propriedades e métodos ---");
const user = {
   email: "vini@email.com",
   age: 25,
   name: {
      first: "Vinicius",
      last: "Espinosa",
   },
   address: {
      street: "Rua X",
      number: 12,
      city: "São Paulo",
      postal_code: "180190-000",
   },
   messageArrowFunction: () => {
      console.log(`Olá, ${user.name.first}`);
      // Não funciona em arrow function
      console.log(`usando o this fica assim, ${this.name.first}`);
   },
   messageAnonymousFunction: function () {
      console.log(`Olá, ${user.name.first}`);
      console.log(`usando o this fica assim, ${this.name.first}`);
   },
};

// Acessando propriedades e métodos usando notação de ponto
console.log("--- Acessando propriedades e métodos notação de ponto ---");
console.log(user.email);
console.log(user.name.first);
user.messageArrowFunction();
user.messageAnonymousFunction();

console.log("--- Acessando propriedades e métodos notação de colchetes ---");
console.log("notação colchetes: ", user["email"]);
console.log("notação colchetes: ", user["name"]["first"]);
user["messageArrowFunction"]();
user["messageAnonymousFunction"]();

console.log("--- Atualizar objeto ---");
const product = {
   name: "Teclado",
   quantity: 100,
};

console.log(product.name);
console.log(product.quantity);
product.quantity = 90;
console.log(product.quantity);
product["quantity"] = 50;
console.log(product);

/// Optional chaining
console.log("--- Optional chaining ---");
/* Encadeamento opcional. Se a propriedade ou função chamada é nullish (null or undefined), 
   a expressão retorna undefined em vez de gerar um erro 
*/

const newUser = {
   id: 1,
   name: "Vini",
   address: {
      street: "Avenida Brasil",
      city: "São Paulo",
      geo: {
         latitude: 23.123,
         longitude: 88.3333,
      },
   },
   message: function () {
      console.log(`Olá, ${this.name}`);
   },
};

console.log(newUser?.address?.street);
newUser.message?.();

/// Operador de coaslescência nula (??)
console.log("--- Operador de coaslescência nula (??) ---");
/* Operador lógico que retorna o seu operando do lado direito quando o seu operador do lado esquerdo é null ou undefined. 
   caso contrário, ele retorna o seu operando do lado esquerdo
*/
let content = null;
content = undefined;
console.log(content ?? "Conteúdo é nulo");

/// Função construtora
console.log("--- Função construtora ---");
function createProduct(name) {
   const product = {};

   product.name = name;
   product.details = function () {
      console.log(`O nome do produto é ${this.name}`);
   };

   return product;
}

// Nova copia na memória, criar instância
const product1 = new createProduct("Sabonete");
console.log(product1.name);
product1.details();
const product2 = new createProduct("Shampoo");
console.log(product2.name);
product2.details();

// exemplos de funções construtoras do próprio javascript
let myName = new String("Vini")
console.log(myName)

let price = "40.6".replace(".", "")
console.log(price)

let date = new Date("2024-11-02")
console.log(date)

// Dá pra fazer desse jeito, mas o javascript recomenda fazer classe
function Person(name) {
   this.name = name
   this.message = function () {
      console.log(`Ola, ${this.name}`)
   }
}

const person1 = new Person("Rod")
console.log(person1.name)

const person2 = new Person("Vini")
console.log(person2.name)