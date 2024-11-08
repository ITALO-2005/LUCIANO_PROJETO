//Tabuada de soma
for (i = 0; i < 10; i++) {
    for (j = 0; j < 10; j++) {
        soma = i + j;
        document.getElementById("tabuada").innerHTML += "<br /><br />" + i + " + " + j + " = " + soma;
    }
}
for (i = 0; i < 10; i++) {
    for (j = 0; j < 10; j++) {
        subtracao = i - j;
        document.getElementById("tabuada").innerHTML += "<br /><br />" + i + " - " + j + " = " + subtracao;
    }
}
for (i = 0; i < 10; i++) {
    for (j = 0; j < 10; j++) {
        multiplicacao = i * j;
        document.getElementById("tabuada").innerHTML += "<br /><br />" + i + " * " + j + " = " + multiplicacao;
    }
}
for (i = 0; i < 10; i++) {
    for (j = 0; j < 10; j++) {
        divisao = j !== 0 ? (i / j).toFixed(2) : "Indefinido";
        document.getElementById("tabuada").innerHTML += "<br /><br />" + i + " / " + j + " = " + divisao;
    }
}


