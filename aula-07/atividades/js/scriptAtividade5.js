function conversor() {
    var celsius = window.prompt("Informe a temperatura em Celsius: ");

    var fahrenheit = celsius * (9 / 5) + 32; 

    document.getElementById("info").innerHTML = `A temperatura ${celsius} °c convertida em Fahrenheit é ${fahrenheit} F.`;
}