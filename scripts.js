const amount = document.getElementById("amount");
const currency = document.getElementById("currency");
const result = document.getElementById("result");
const description = document.getElementById("description");

const usd = 5.38;
const eur = 6.23;
const gbp = 7.07;

function changeInfo() {
   let symbol;
   let amount;

   switch (currency.value) {
      case "USD":
         symbol = "$";
         amount = usd;
         break;
      case "EUR":
         symbol = "€";
         amount = eur;
         break;
      case "GBP":
         symbol = "£";
         amount = gbp;
         break;
   }

   description.textContent = `${symbol} 1.00 - R$ ${amount.toFixed(2)}`;
   console.log(description.textContent);
}

window.onload = () => {
   console.log("oi");
   changeInfo();
};

amount.addEventListener("input", () => {
   let newValue = amount.value.toString().replace(/[^0-9]/g, "");
   amount.value = newValue;
   changeInfo();
   convert();
});

currency.addEventListener("change", () => {
   changeInfo();
   convert();
});

function convert() {
   let calcResult;

   switch (currency.value) {
      case "USD":
         calcResult = amount.value / usd;
         break;
      case "EUR":
         calcResult = amount.value / eur;
         break;
      case "GBP":
         calcResult = amount.value / gbp;
         break;
   }

   result.textContent = `R$${calcResult.toFixed(2)}`;
}
