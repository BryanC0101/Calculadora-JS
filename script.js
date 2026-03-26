const visor = document.getElementById('visor');
const sinais = ['+', '-', '*', '/', '%', '.'];
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
}

function limpar() {
    memoria = [];
    visor.innerHTML = ''
}

function apagar() {
    memoria.pop();
    visor.textContent = visor.textContent.slice(0, -1);
}

function resultado() {
    if (memoria === '' || visor.innerHTML === '') {
        return;
    }
    let expressao = memoria.join("");
    expressao = expressao.replace(/(\d+)%/g, "($1/100)")


    // let express_array = [expressao];
    // console.log(express_array)
    // let i = express_array.indexOf("%");
    // if (i !== -1) {
    //     express_array[1] = "/100";
    // }


    let resultado = eval(expressao);
    console.log(memoria);
    console.log(expressao);
    console.log(resultado);
    
    visor.innerHTML = '';
    visor.innerHTML = resultado;
    memoria = [];
}