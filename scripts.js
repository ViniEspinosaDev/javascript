// Values
let amount = 12.5;
let message = amount.toLocaleString("pt-BR", {
   style: "currency",
   currency: "BRL",
});
console.log(message);

// Date
let date = new Date("2025-10-02T21:33:33");
let dateMessage = date.toLocaleString("pt-BR", {
   dateStyle: "full",
});
console.log(dateMessage);

dateMessage = date.toLocaleString("pt-BR", {
   day: "2-digit",
   month: "2-digit",
   year: "2-digit",
   hour: "2-digit",
   minute: "2-digit",
});
console.log(dateMessage);
