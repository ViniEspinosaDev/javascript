var guest = document.querySelector("#guest-1");
console.log(guest.innerHTML);
console.log(guest.innerText); // Mostra só o visível
console.log(guest.innerHTML);

// Adicionar/remover classe
//const input = document.querySelector("#name");
//input.classList.add("input-error");
//input.classList.toggle("input-error"); // Se não tiver a classe, adiciona

// Mudar style
const button = document.querySelector("button");
button.style.backgroundColor = "#3F33";

// Adicionar elementos
const guests = document.querySelector("ul");
const newGuest = document.createElement("li");
const guestName = document.createElement("span");
guestName.textContent = "Novo nome";
newGuest.append(guestName);
guests.appendChild(newGuest);

// Evento
window.addEventListener("load", () => {
    console.log("A página foi carregada!")
})

addEventListener("click", (event) => {
    // event.preventDefault()
    //console.log(event) // Todos os dados do elemento
    //console.log(event.target) // Retorna o elemento clicado
    console.log(event.target.textContent) // Retorna o textContente do elemento clicado
})

const ul = document.querySelector("ul")
ul.addEventListener("scroll", (event) => {
    console.log(event)

    ul.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})

const form = document.querySelector("form")

form.onsubmit = (event) => {
    event.preventDefault()
    console.log("Você fez submit #1") // Nao aparece
}

form.onsubmit = (event) => {
    event.preventDefault()
    console.log("Você fez submit #2") // Nao aparece
}

form.onsubmit = (event) => {
    event.preventDefault()
    console.log("Você fez submit #3") // aparece
}

form.addEventListener("submit", (event) => {
    event.preventDefault()
    console.log("Você fez submit #4") // aparece
})

form.addEventListener("submit", (event) => {
    event.preventDefault()
    console.log("Você fez submit #5") // aparece
})

// eventos input
const input = document.querySelector("input")

// keydown - qualquer tecla pressionada
input.addEventListener("keydown", (event) => {
    //console.log(event)
})

// keypress - quando tecla do tipo caractere é pressionada (ignora ctrl, shift, alt, esc, enter)
input.addEventListener("keypress", (event) => {
    console.log(event)
})

// change
input.onchange = () => {
    console.log("Input mudou")
}