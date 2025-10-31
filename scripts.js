try {
    // Tenta executar algo
    console.log(result)
} catch (error) {
    // Executa caso dê erro
    console.log(`Não foi possível executar. Retorno: ${error}`)
} finally {
    // Executa sempre
    console.log("Fim da execução")
}

let result = 0

try {
    if(result == 0)
        throw new Error("O valor é igual a zero.")
} catch (error) {
    console.log(`Não foi possível executar. Retorno: ${error}`)
}
finally {
    console.log("Fim")
}