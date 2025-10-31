// Callback function: Função passada para outra funcao como argumento
function execute(taskName, callback) {
   console.log("Executando a tarefa: ", taskName);
   callback();
}

function callback() {
   console.log("Tarefa finalizada");
}

// Passando para a função
execute("Donwload do arquivo", callback);

// Criando a função no próprio parâmetro
execute("Upload do arquivo...", function () {
    console.log("Função de callback com uma função anônima.")
});

// Criando a função como arrow function no próprio parâmetro
execute("Excluindo arquivo...", () => {
    console.log("Arquivo excluído")
})

// Utilizar arrow function de forma encurtada (Quando é apenas uma linha)
execute("Salvando arquivo...", () => console.log("Arquivo salvo!"))