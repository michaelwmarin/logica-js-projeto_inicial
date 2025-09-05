alert('Boas-vindas ao jogo do Número Secreto');
alert('Você tem 3 tentativas para acertar');

let numeroSecreto = 29;
let chute 
let tentativas = 0;

while (tentativas < 3) {
    chute = prompt('Digite um número entre 0 e 100');
    if (chute == numeroSecreto) {
            alert(`Você acertou! Parabéns! com ${tentativas + 1} tentativas`);
                break;
        } else if (chute < 0 || chute > 100) {
            alert('Você deve digitar um número entre 0 e 100');
                tentativas++;
        } else if (isNaN(chute)) {
                alert('Você deve digitar um número válido entre 0 e 100');
                tentativas++;
        } else if (chute < numeroSecreto) {
                alert('O número secreto é maior!');
                tentativas++;
        } else if (chute > numeroSecreto) {
                alert('O número secreto é menor!');
                tentativas++;
        } else if (chute === null) {
            alert('O jogo acabou. Você desistiu');
    }
}
alert(`Suas tentativas acabaram. O número secreto era ${numeroSecreto}`);
alert('Fim de jogo');