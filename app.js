// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor escribe un nombre válido");
        return;
    }

    amigos.push(nombre);
    input.value = "";

    mostrarLista();
}

function mostrarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Agrega al menos un nombre antes de sortear");
        return;
    }

    let indice = Math.floor(Math.random() * amigos.length);
    let ganador = amigos[indice];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    let li = document.createElement("li");
    li.textContent = "🎉 Amigo secreto: " + ganador;
    resultado.appendChild(li);
}
