"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline"); //O módulo readline permite ler entradas do usuário no terminal
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
function calcular(n1, n2, operacao) {
    var resultado;
    switch (operacao) { //Escolha das operações a partir da escolha do usuário
        case 1:
            resultado = n1 + n2;
            console.log("O resultado da adi\u00E7\u00E3o \u00E9: ".concat(resultado));
            break;
        case 2:
            resultado = n1 - n2;
            console.log("O resultado da subtra\u00E7\u00E3o \u00E9: ".concat(resultado));
            break;
        case 3:
            resultado = n1 * n2;
            console.log("O resultado da multiplica\u00E7\u00E3o \u00E9: ".concat(resultado));
            break;
        case 4:
            if (n2 === 0) {
                console.log("Não existe divisão por zero!");
                rl.close();
                return;
            }
            resultado = n1 / n2;
            console.log("O resultado da divis\u00E3o \u00E9: ".concat(resultado));
            break;
        default:
            console.log("Operação inválida.");
            rl.close(); //Encerra o processo, após o segundo número ser processado e o resultado ser exibido
            return;
    }
    rl.close(); //Encerra o processo, após o segundo número ser processado e o resultado ser exibido
}
rl.question('Digite o primeiro número: ', function (primeiroNumero) {
    var numero1 = parseFloat(primeiroNumero);
    rl.question('Digite o segundo número: ', function (segundoNumero) {
        var numero2 = parseFloat(segundoNumero);
        rl.question('Digite a operação que deseja calcular (1 - Adição ; 2 - Subtração ; 3 - Multiplicação ; 4 - Divisão): ', function (operacao) {
            var operacaoFloat = parseFloat(operacao);
            calcular(numero1, numero2, operacaoFloat);
        });
    });
});
