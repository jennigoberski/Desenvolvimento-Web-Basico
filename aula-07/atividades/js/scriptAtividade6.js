function conversor() {
    var valorReais = window.prompt("Informe o valor em reais: ");
    var cotacaoDolar = window.prompt("Informe a cotação do dólar atual: ");

    var valorDolar = valorReais / cotacaoDolar;

    document.getElementById("resultado").innerHTML = `A quantia ${valorReais} reais convertida em dólares é ${valorDolar.toFixed(2)}`;
}