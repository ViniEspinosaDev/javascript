let students = ["Vini", "Joao", "Julio"];

for (let student of students) {
   // Exibe o nome dos estudantes
   console.log(student);
}

for (let index in students) {
   // Exibe o index dos estudantes
   console.log(index);
}

let user = {
   name: "Rodrigo",
   email: "rod@email.com",
};

for (let value of user) {
   // Erro pois não é iterável
   console.log(value);
}
