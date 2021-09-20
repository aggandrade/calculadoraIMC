const calcular = document.getElementById('calcular');

function imc() {
const nome = document.getElementById('nome').value;
const peso = document.getElementById('kilos').value;
const altura = document.getElementById('altura').value;
const resultado = document.getElementById('resultado');

if (nome !== '' && altura !== '' && peso !== '') {

    const valorIMC = (peso/(altura**2)).toFixed(1);
    const pesominimo = (18,5(altura**2)).toFixed(1);
    const pesomaximo = (25(altura**2)).toFixed(1);

    let classificacao = '';

    if (valorIMC < 18.5){
        classificacao = 'Abaixo do peso.';
    } else if (valorIMC < 25){
        classificacao = 'Com peso ideial. Parabéns!';
    } else if (valorIMC < 30){
        classificacao = 'Levemente acima do peso.';
    } else if (valorIMC < 35){
        classificacao = 'Com obesidade grau I.';
    } else if (valorIMC < 40){
        classificacao = 'Com obesidade grau II.';
    }else {
        classificacao = 'Com obesidade grau III.';
    }

    resultado.textContent =`Olá, ${nome}! Com ${peso}kg e ${altura}m, seu IMC é ${valorIMC}. Atualmente você esta ${classificacao}. Seu peso mínimo é ${pesominimo} e o máximo é ${pesomaximo}`;


}else{
    resultado.textContent = 'Para calcular o seu IMC, preencha todos os campos.';
}

}
calcular.addEventListener('click', imc);