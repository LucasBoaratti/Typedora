import * as readline from "readline"; //O módulo readline permite ler entradas do usuário no terminal

const rl = readline.createInterface({ //Interface de leitura que permite a entrada e a saída de dados
	input: process.stdin,
	output: process.stdout,
});

function calcular(n1: number, n2: number, operacao: string) {
	let resultado: number;

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

rl.question('Digite o primeiro número: ', (primeiroNumero) => { //Exibe a pergunta pro usuário que recebe ela como primeiroNumero e converte para float
	const numero1 = parseFloat(primeiroNumero);

	rl.question('Digite o segundo número: ', (segundoNumero) => { //Exibe a pergunta pro usuário que recebe ela como segundoNumero e converte para float
		const numero2 = parseFloat(segundoNumero);

		rl.question('Digite a operação que deseja calcular: ', (operacao) => {
			calcular(numero1, numero2, operacao);
		});
	});
});