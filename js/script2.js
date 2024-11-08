const display = document.querySelector('.display');
let entrada_atual = '';

const buttons = document.querySelectorAll('.calculator button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const texto_botao = button.innerText;
        if (texto_botao === 'C') {
            entrada_atual = '';
            display.innerText = '0';
        } else if (texto_botao === '=') {
            try {
                entrada_atual = eval(entrada_atual.replace('mod', '%'));
                display.innerText = eval(entrada_atual);
                entrada_atual = display.innerText;
            } catch (error) {
                display.innerText = 'Erro';
                entrada_atual = '';
            }
        } else {
            entrada_atual += texto_botao;
            display.innerText = entrada_atual;
        }
    });
});
