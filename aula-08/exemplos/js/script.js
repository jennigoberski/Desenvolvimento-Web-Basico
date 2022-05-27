function ex1() {
    var nome = document.getElementById("nome").value;
    window.alert("Seu nome é " + nome);
}

function ex2() {
    var volume = document.getElementById("volume").value;
    document.getElementById("resultado").innerHTML = volume;
}

function ex3() {
    var texto = document.getElementById("comentarios").value;
    var resto = 150 - (texto.length);

    document.getElementById("resultado").innerHTML = `Restam ${resto} caracteres`;
}