console.log("### EXEMPLOS FALSY ###")
console.log(false ? "TRUE": "FALSE") // false
console.log(0 ? "TRUE": "FALSE") // false
console.log(-0 ? "TRUE": "FALSE") // false
console.log("" ? "TRUE": "FALSE") // false
console.log(null ? "TRUE": "FALSE") // false
console.log(NaN ? "TRUE": "FALSE") // false
console.log(undefined ? "TRUE": "FALSE") // false

console.log("### EXEMPLOS TRUTHY")
console.log(true ? "TRUE": "FALSE") // true
console.log(1 ? "TRUE": "FALSE") // true
console.log("aa" ? "TRUE": "FALSE") // true
console.log(" " ? "TRUE": "FALSE") // true
console.log("false" ? "TRUE": "FALSE") // true
console.log(-1 ? "TRUE": "FALSE") // true
console.log(1221 ? "TRUE": "FALSE") // true
console.log(-1221 ? "TRUE": "FALSE") // true
console.log(-1.221 ? "TRUE": "FALSE") // true
console.log({} ? "TRUE": "FALSE") // true
console.log([] ? "TRUE": "FALSE") // true
console.log(Infinity ? "TRUE": "FALSE") // true