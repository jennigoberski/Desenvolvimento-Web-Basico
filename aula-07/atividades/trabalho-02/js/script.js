function exerc1() {
    var num1 = window.prompt("Informe o primeiro número: ");
    var num2 = window.prompt("Informe o segundo número: ");

    if (num1 > num2) {
        document.getElementById("texto_display").innerHTML = `Em ordem crescente: ${num2} , ${num1}`; 
    } else {
        document.getElementById("texto_display").innerHTML = `Em ordem crescente: ${num1} , ${num2}`; 
    }
}

function exerc2() {
    var pesoIdeal;
    var altura = window.prompt("Informe sua altura: ");
    var genero = window.prompt("Informe o genêro: ");

    if (genero == 'F' || genero == 'f' || genero == 'feminino' || genero == 'Feminino') {
        pesoIdeal = (62.1 * altura) - 44.7;

        document.getElementById("texto_display").innerHTML = `O seu peso ideal é ${pesoIdeal.toFixed(2)}`;
    } 
    else if(genero == 'M' || genero == 'm' || genero == 'masculino' || genero == 'Masculino') {
        pesoIdeal = (72.7 * altura) - 58;

        document.getElementById("texto_display").innerHTML = `O seu peso ideal é ${pesoIdeal.toFixed(2)}`;
    }
}

function exerc3() {
    var num1 = window.prompt("Informe o primeiro número: ");
    var num2 = window.prompt("Informe o segundo número: ");
    var num3 = window.prompt("Informe o terceiro número: ");

    if (num1 < num2 && num1 < num3) {
        document.getElementById("texto_display").innerHTML = `O menor número digitado foi ${num1}`;
    } else if (num2 < num1 && num2 < num3) {
        document.getElementById("texto_display").innerHTML = `O menor número digitado foi ${num2}`;
    } else if(num3 < num1 && num3 < num2) {
        document.getElementById("texto_display").innerHTML = `O menor número digitado foi ${num3}`;
    }
}

function exerc4() {
    var numero = window.prompt("Informe um número: ");

    if (numero > 0) {
        if (numero % 2 == 0) {
            document.getElementById("texto_display").innerHTML = "O número digitado é positivo e par.";
        } else {
            document.getElementById("texto_display").innerHTML = "O número digitado é positivo e ímpar.";
        }
    } else {
        document.getElementById("texto_display").innerHTML = "O número digitado é negativo e seu absoluto é " + Math.abs(numero) + " .";
    }
}

function exerc5() {
    var numero = window.prompt("Informe um número: ");
    
    if (numero % 2 == 0 && numero % 3 == 0) {
        document.getElementById("texto_display").innerHTML = `O número ${numero} é divísivel por 2 e 3.`;
    } else if(numero % 2 == 0){
        document.getElementById("texto_display").innerHTML = `O número ${numero} é divísivel somente por 2.`;
    } else if(numero % 3 == 0) {
        document.getElementById("texto_display").innerHTML = `O número ${numero} é divísivel somente por 3.`;
    } else {
        document.getElementById("texto_display").innerHTML = `O número ${numero}  não é divísivel  nem por 2 e nem por 3.`;
    }
}

function exerc6() {
    var numero = window.prompt("Informe um número: ");

    if(numero % 2 == 0){
        document.getElementById("texto_display").innerHTML = `O número ${numero} é divísivel  por 2.`;
    } else if(numero % 7 == 0) {
        document.getElementById("texto_display").innerHTML = `O número ${numero} é divísivel  por 7.`;
    }
}

function exerc7() {
    var numero = Number(window.prompt("Informe um número: "));

    switch (numero) {
        case 1:
            document.getElementById("texto_display").innerHTML = "O dia corresponde é Domingo!";
            break;
        case 2:
            document.getElementById("texto_display").innerHTML = "O dia corresponde é Segunda!";
            break;
        case 3:
            document.getElementById("texto_display").innerHTML = "O dia corresponde é Terça!";
            break;
        case 4:
            document.getElementById("texto_display").innerHTML = "O dia corresponde é Quarta!";
            break;
        case 5:
            document.getElementById("texto_display").innerHTML = "O dia corresponde é Quinta!";
            break;
        case 6:
            document.getElementById("texto_display").innerHTML = "O dia corresponde é Sexta!";
            break;
        case 7:
            document.getElementById("texto_display").innerHTML = "O dia corresponde é Sábado!";
            break;
        default:
            document.getElementById("texto_display").innerHTML = "Esse número não corresponde a nenhum dia da semana!";
            break;
    }
}