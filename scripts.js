let person = {
   name: "Vini",
   surname: "Espinosa",
   email: "vini@emil.com",
};

for (let property in person) {
   // Exibe o nome da propriedade
   console.log(property);

   // Exibe o conteudo da propriedade
   console.log(person[property]);
}

let students = ["Vini", "Ana", "Gabi"];

for (let index in students) {
   console.log(index);

   console.log(students[index]);
}
