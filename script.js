const visor = document.getElementById('visor');
const sinais = ['+', '-', '*', '/', '%', ',', '='];
let memoria = []



function inserir(valor) {
    let ultimoItem = memoria[memoria.length - 1];
    if (memoria[0] === undefined && sinais.includes(valor)) {
        return;
    }
    if (sinais.includes(ultimoItem) && sinais.includes(valor)) {
        return;
    } 
    memoria.push(valor)
    visor.innerHTML += valor
    console.log(memoria);
}

function limpar() {
    memoria = [];
    visor.innerHTML = ''
}

function apagar() {
    memoria.pop()
}

function resultado() {
    
}