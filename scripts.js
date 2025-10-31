let one = 1
let two = 2

console.log(one == two) // false
console.log(one == 1) // true
console.log(one == "1") // true (olha para o conteúdo e não para o tipo)

// Estritamente igual (tipo e valor)
console.log(one === "1") // false (olha para o conteúdo e para o tipo)
// Estritamente diferente (tipo e valor)
console.log(one !== "1") // true (olha para o conteúdo e para o tipo) no caso conteúdo é igual, o tipo não, então é true porque é diferente

console.log(one != two) // true
console.log(one != 1) // false 
console.log(one != "1") // false (olha para o conteúdo e não para o tipo)

console.log(one > two) // false
console.log(one < two) // false
