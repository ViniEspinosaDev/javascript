// Shallow Copy (cópia superficial): não pega os itens aninhados...
const htmlCourse = {
   course: "HTML",
   students: [
      {
         name: "Rodrigo",
         email: "rodrigo@email.com",
      },
   ],
};

// Fez a cópia rasa. A lista 'students' ele passou a mesma referência da memória do htmlCourse.students
const javascriptCourse = {
   ...htmlCourse,
   course: "Javascript",
};

javascriptCourse.students.push({ name: "Vinicius", email: "vinicius@email.com" });

// ------ Deep Copy (cópia profunda) - Maneira 1
const cssCourse = {
   ...htmlCourse,
   course: "CSS",
   students: [...htmlCourse.students, { name: "Maria", email: "maria@email.com" }],
};

cssCourse.students.push({ name: "Pedro", email: "pedro@email.com" });

// -------- Deep Copy (cópia profunda) - Maneira 2
const csharpCourse = {
   ...htmlCourse,
   course: "C#",
};

csharpCourse.students = [
   ...htmlCourse.students,
   { name: "Rafael", email: "rafael@email.com" },
   { name: "Alberto", email: "alberto@email.com" },
   { name: "Matheus", email: "matheus@email.com" },
   { name: "Ricardo", email: "ricardo@email.com" },
   { name: "Marcelo", email: "marcelo@email.com" },
];

console.log(htmlCourse); // course: html, students: rodrigo e vinicius
console.log(javascriptCourse); // course: javascript, students: rodrigo e vinicius
console.log(cssCourse); // course: css, students: rodrigo, vinicius, maria e pedro
console.log(csharpCourse); // course: css, students: rodrigo, vinicius, rafael, alberto, matheus, ricardo e marcelo
