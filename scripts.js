// Função anônima (função que não possui nome)
const showMessage = function () {
   return "Olá, Vinicius"
};

console.log(showMessage) // ƒ () { return "Olá, Vinicius" }
console.log(showMessage()); // Olá, Vinicius

const executeSum = function(number1, number2) {
    let result = number1 + number2
    return result
}

console.log(executeSum) // ƒ (number1, number2) { let result = number1 + number2 return result }
console.log(executeSum(1, 2)) // 3