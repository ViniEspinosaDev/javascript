showMessage("Fala meu amigo")

function showMessage(message){
    console.log(message)
    endLine()

    // Existe essa função apenas nesse escopo
    function endLine(){
        console.log("-------")
    }
}

// Erro
endline()