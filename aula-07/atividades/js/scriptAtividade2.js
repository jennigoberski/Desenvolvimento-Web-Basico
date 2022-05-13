function apresentacao() {
    var nome = window.prompt("Qual o seu nome? ");
    var sobrenome = window.prompt("Qual o seu sobrenome?  ");
    var idade = window.prompt("Qual a sua idade?  ");

    document.getElementById("info").innerHTML =`Acabei de conhecer ${nome} ${sobrenome}, que
    tem ${idade} anos de idade.`;
}