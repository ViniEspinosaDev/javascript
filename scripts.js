// destructuring assignment (desestruturação) permite extrair
// dados de arrays ou objetos em variáveis distinta

const infos = ["vini", "vini@email.com"];

const [username, email] = infos;

console.log(username);
console.log(email);

//
const fruits = ["banana", "apple", "orange"];
const [ban] = fruits;
console.log(ban);

const [_, apple] = fruits;
console.log(apple);

const[,,orange] = fruits
console.log(orange)
