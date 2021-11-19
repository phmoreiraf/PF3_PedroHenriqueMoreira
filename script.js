const calculate = document.getElementById('calcular');

function calcularValor() {
    const name = document.getElementById('name').value;
    const valorMensal = document.getElementById('valorMensal').value;
    const taxaJuros = document.getElementById('taxaJuros').value;
    const numParcelasMensais = document.getElementById('numParcelasMensais').value;
    const resultText = document.getElementById('resultText');
    const juros = taxaJuros / 100;
    if (name !== '' && valorMensal !== '' && taxaJuros !== '' && numParcelasMensais !== '') {

        //const valorFuturoPoupado = valorMensal * ((Math.pow((1 + juros), numParcelasMensais) - 1) / juros).toFixed(1);
        const valorFuturoPoupado = (valorMensal * ((1 + juros) ** numParcelasMensais - 1) / juros).toFixed(2);


        resultText.textContent = `Olá, ${name}!, se voce aplicar R$${valorMensal}, a taxa de juros de ${taxaJuros}% ao mes,
                                durante ${numParcelasMensais} meses, acumulara uma poupanca de R$${valorFuturoPoupado}`;


    } else {
        result.textContent =
            'Para calcular o seu valor poupado, preencha todos os campos.';

        resultName.textContent = '';
        resultText.textContent = '';
    }
}

calculate.addEventListener('click', calcularValor);