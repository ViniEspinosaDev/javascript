/* Hoisting (levantar ou içar) 

    se refere ao comportamento do interpretador de mover
    as declarações de variáveis e funções para o topo do escopo em que foram definidas,
    antes mesmo da execução do código.

    esse comportamento possibilita usar uma variável ou função antes que ela esteja definida.
    
    se usar antes da variável ser declarada, vai ser undefined.

    função também.

    usar mais o let do que o var. 
    var só quando for escopo global

    hoisting só funciona com o var
*/

console.log(user)

var user = "user"
