//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// app.js

let amigos = [];
let sorteio = {}; // Objeto para armazenar o sorteio

function adicionarAmigo() {
    const nomeAmigo = document.getElementById("amigo").value.trim();
    const listaAmigos = document.getElementById("listaAmigos");

    if (nomeAmigo === "") {
        alert("Por favor, digite um nome.");
        return;
    }

    if (amigos.includes(nomeAmigo)) {
        alert("Este amigo já foi adicionado.");
        return;
    }

    amigos.push(nomeAmigo);

    const listItem = document.createElement("li");
    listItem.textContent = nomeAmigo;

    listaAmigos.appendChild(listItem);

    document.getElementById("amigo").value = "";
    document.getElementById("amigo").focus();
}

function sortearAmigoIndividual() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos 2 amigos para sortear.");
        return;
    }

    sorteio = {}; // Limpa sorteio anterior

    //Cria uma cópia do array para não modificar o original
    let copiaAmigos = [...amigos];

    //Embaralha o array copiado
    for (let i = copiaAmigos.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copiaAmigos[i], copiaAmigos[j]] = [copiaAmigos[j], copiaAmigos[i]];
    }
    
    //Realiza o sorteio, atribuindo a cada amigo um amigo secreto
    for (let i = 0; i < copiaAmigos.length; i++) {
        const amigo = copiaAmigos[i];
        let amigoSecreto;

        //Garante que a última pessoa não tire ela mesma, pegando o primeiro nome
        if (i === copiaAmigos.length - 1) {
            amigoSecreto = copiaAmigos[0];
        } else {
            amigoSecreto = copiaAmigos[i + 1];
        }

        sorteio[amigo] = amigoSecreto;
    }

     // Exibe quem você sorteou (apenas para você!)
     const amigoSorteadoParaVoce = Object.keys(sorteio).find(amigo => amigo === amigos[0]); // Encontra quem você tirou
     const resultadoElemento = document.getElementById("resultado");
     resultadoElemento.innerHTML = `Você tirou: ${sorteio[amigoSorteadoParaVoce]}`;

}

function mostrarSorteio() {
    if (Object.keys(sorteio).length === 0) {
        alert("Sorteie os amigos primeiro!");
        return;
    }

    let resultadoHTML = "";
    for (const amigo in sorteio) {
        resultadoHTML += `${amigo} tirou ${sorteio[amigo]}<br>`;
    }

    const resultadoElemento = document.getElementById("resultado");
    resultadoElemento.innerHTML = resultadoHTML;
}