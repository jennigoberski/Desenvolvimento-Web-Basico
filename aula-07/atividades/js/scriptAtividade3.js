function numero() {
    var numero = window.prompt("Informe um número: ");
document.getElementById("info").innerHTML = "O número digitado foi " + numero + ". Antes dele vem o " + (numero - 1) + ". Depois dele vem o " + (Number(numero) + 1) + ".";
}