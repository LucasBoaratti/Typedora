"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline")); //O módulo readline permite ler entradas do usuário no terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
function calcular(n1, n2, operacao) {
    let resultado;
    switch (operacao.toLowerCase()) {
        case "adição":
            resultado = n1 + n2;
            break;
        case "subtração":
            resultado = n1 - n2;
            break;
        case "multiplicação":
            resultado = n1 * n2;
            break;
        case "divisão":
            if (n2 === 0) {
                console.log("Não existe divisão por zero!");
                rl.close();
                return;
            }
            resultado = n1 / n2;
            break;
        default:
            console.log("Operação inválida.");
            rl.close(); //Encerra o processo, após o segundo número ser processado e o resultado ser exibido
            return;
    }
    console.log(`O resultado da ${operacao} é: ${resultado}`);
    rl.close(); //Encerra o processo, após o segundo número ser processado e o resultado ser exibido
}
rl.question('Digite o primeiro número: ', (primeiroNumero) => {
    const numero1 = parseFloat(primeiroNumero);
    rl.question('Digite o segundo número: ', (segundoNumero) => {
        const numero2 = parseFloat(segundoNumero);
        rl.question('Digite a operação que deseja calcular: ', (operacao) => {
            calcular(numero1, numero2, operacao);
        });
    });
});
