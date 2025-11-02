/*
   Filter() - cria um novo array com todos
   os elementos que passaram na condição.
*/

const words = ["Javascript", "HTML", "CSS", "Web"];

const result = words.filter((word) => word.length > 3);

console.log(result);

const products = [
   {
      description: "Teclado",
      price: 150.3,
      promotion: false,
   },
   {
      description: "Mouse Pad",
      price: 50.3,
      promotion: true,
   },
   {
      description: "Monitor",
      price: 30.3,
      promotion: true,
   },
];

const promotion = products.filter((product) => product.promotion);
console.log(promotion);
