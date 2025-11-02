// destructuring assignment (desestruturação) permite extrair
// dados de arrays ou objetos em variáveis distinta

const product = {
   description: "Teclado",
   price: 150
}

const { description, price } = product
console.log(description)
console.log(price)


/////
function newProduct({description, price}){
   console.log("### NOVO PRODUTO ###")
   console.log(description)
   console.log(price)
}

newProduct({
   price: 59, 
   description: "Mouse"
})