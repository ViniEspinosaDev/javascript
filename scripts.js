class Person {
   constructor(name, email) {
      this.name = name;
      this.email = email;
   }

   sendEmail() {
      console.log("e-mail was sent")
   }

   static showMessage() {
      console.log("oiiii amigao")
   }
}

const person = new Person("João", "joao@email.com");
console.log(person.name)

const person2 = new Person("Marcelo", "marcelo@email.com");
console.log(person2.name)

person2.sendEmail()

Person.showMessage()