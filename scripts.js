/*
   Imutabilidade - ao invés de criar uma referência
   do objeto e ao alterar, mudar o original, o ideal
   é copiar os dados para outro espaço da memória, 
   para manter o original imutável
*/

const address1 = {
   street: "Av. Brasil",
   number: 20,
};

// Isso não é uma cópia. É uma referência
const address2 = address1;
address2.number = 30;

console.log(address1); // 30
console.log(address2); // 30

// ------- Copiar 1
const person = {
   name: "Vinicius",
   age: 25,
};

// Copia para outro endereço da memória
const person2 = { ...person };
person2.name = "Wilma";
person2.age = 88;

console.log(person); // Vinicius 25
console.log(person2); // Wilma 88

// ------- Copiar 2
const product = {
   description: "Teclado",
   price: 80.5,
};

const productAfterDiscount = { ...product, price: 70 };

console.log(product); // Teclado 80.5
console.log(productAfterDiscount); // Teclado 70

// ----- Exemplo com array
// Não cria a cópia. É a mesma referência da memória
const list1 = ["Apple", "Banana"];
const list2 = list1;

list2.push("Watermelon");

// Cria cópia em outro endereço da memória. Tornando o original imutável
const list3 = [...list1, "Strawberry"];
list3.push("Orange", "Grape");

console.log(list1); // apple, banana, watermelon
console.log(list2); // apple, banana, watermelon
console.log(list3); // apple, banana, watermelon, strawberry, orange, grape
