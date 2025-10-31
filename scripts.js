// Escopo global
var email = "joao@gmail.com"
{
    // Escopo de bloco
    console.log(email)
}

{
    var age = 18
}
// Funciona porque var é escopo global
console.log(age)

{
    let name = "Vini"
}
// Não vai mostrar porque let não é nível global
console.log(name) 

let escopo = "escopo acima"

{
    // Funciona pois let escopo está no escopo acima
    console.log(escopo)
}