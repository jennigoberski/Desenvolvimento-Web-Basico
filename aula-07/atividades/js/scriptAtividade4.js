function compra() {
    var nomeProduto = window.prompt("Informe o nome do produto: ");
    var preco = window.prompt("Informe o valor do produto: ");
    var valorPago = window.prompt("Informe quanto você pagou para o atendente: ");

    if (preco == valorPago) {
        document.getElementById("info").innerHTML = `Você escolheu o produto ${nomeProduto}, que custa ${preco}. Você pagou ${valorPago} reais, e não vai precisar de troco nem ficou devendo.`;
    }
    else if (valorPago > preco) {
        var troco = Math.abs(valorPago - preco);

        document.getElementById("info").innerHTML = `Você escolheu o produto ${nomeProduto}, que custa ${preco}. Você pagou ${valorPago} reais, e vai receber de troco ${troco.toFixed(2)} reais.`;
    }
    else if (preco > valorPago) {
        var divida = Math.abs(preco - valorPago);

        document.getElementById("info").innerHTML = `Você escolheu o produto ${nomeProduto}, que custa ${preco}. Você pagou ${valorPago} reais, e ficou devendo ${divida.toFixed(2)} reais.`;
    }
}