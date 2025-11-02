// O strict mode (modo estrito): ativando esse modo, os erros que eram silenciosos passam
// a gerar exceções no javascript

"use strict" // habilita o strict mode

function showMessage() {
   personName = "Rodrigo";

   console.log("Olá", personName);
}

//showMessage()

class Student {
   get point() {
      return 7
   }
}

let student = new Student()
//student.point = 10
console.log(student.point)

//delete window.document

function sum(a, a, c) {
   return a + a + c
}