function gerarTabuada(operacao) {
    let conteudo = "";
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            let resultado;
            switch (operacao) {
                case "soma":
                    resultado = i + j;
                    conteudo += `<br />${i} + ${j} = ${resultado}`;
                    break;
                case "subtracao":
                    resultado = i - j;
                    conteudo += `<br />${i} - ${j} = ${resultado}`;
                    break;
                case "multiplicacao":
                    resultado = i * j;
                    conteudo += `<br />${i} * ${j} = ${resultado}`;
                    break;
                case "divisao":
                    resultado = j !== 0 ? (i / j).toFixed(2) : "Indefinido";
                    conteudo += `<br />${i} / ${j} = ${resultado}`;
                    break;
            }
        }
    }
    document.getElementById("tabuada").innerHTML = conteudo;
}
function mostrarTabuada(operacao) {
    document.getElementById("tabuada").innerHTML = "";
    gerarTabuada(operacao);
}
