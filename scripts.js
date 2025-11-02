// Rest params (...) permite representar um número
// indefinido de argumentos como um array

function values(...args) {
   console.log(...args);
   console.log(args)
}

values(2, 1, 3, 4);
