"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline"); //O módulo readline permite ler entradas do usuário no terminal
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
function calcular() {
    rl.question('Digite o primeiro número: ', function (primeiroNumero) {
        var numero1 = parseFloat(primeiroNumero);
        rl.question('Digite o segundo número: ', function (segundoNumero) {
            var numero2 = parseFloat(segundoNumero);
            var resultado = numero1 + numero2;
            console.log("O resultado da adi\u00E7\u00E3o \u00E9: ".concat(resultado));
            rl.close(); //Encerra o processo, após o segundo número ser processado e o resultado ser exibido
        });
    });
}
calcular();
