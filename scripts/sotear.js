const menorValor = 1
const maiorValor = 1000
const numeroSecreto = gerarNumeroAleatorio()
console.log(numeroSecreto)

function gerarNumeroAleatorio() {
    return Math.floor(Math.random() * maiorValor +1)
}


const elementoMenorValor = document.getElementById('menor-valor');
elementoMenorValor.innerHTML = menorValor

const elementoMaiorValor = document.getElementById('maior-valor')
elementoMaiorValor.innerHTML = maiorValor

