// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
var amigos = [];
let ListaAmigos = document.getElementById("listaAmigos");

function agregarAmigo(){
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();
    if (nombre) {
     amigos.push(nombre);
     actulizarLista();
     input.value = "";
     input.focus();   
    }else{
        alert("Por favor inserte un nombre válido");
    }
}

function actulizarLista(){
    ListaAmigos.innerHTML = "";
    amigos.forEach(nombre => {
        let li = document.createElement("li");
        li.textContent = nombre;
        ListaAmigos.appendChild(li);
    });
}