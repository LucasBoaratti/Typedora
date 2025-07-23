import * as readline from "readline"; //O módulo readline permite ler entradas do usuário no terminal

const rl = readline.createInterface({ //Interface de leitura que permite a entrada e a saída de dados
	input: process.stdin,
	output: process.stdout,
});

function calcular(n1: number, n2: number, operacao: number) {
	let resultado: number;

	switch (operacao) { //Escolha das operações a partir da escolha do usuário
		case 1:
			resultado = n1 + n2;

			console.log(`O resultado da adição é: ${resultado}`);

			break;
		case 2:
			resultado = n1 - n2;

			console.log(`O resultado da subtração é: ${resultado}`);

			break;
		case 3:
			resultado = n1 * n2;

			console.log(`O resultado da multiplicação é: ${resultado}`);

			break;
		case 4:
               if (n2 === 0) {
                    console.log("Não existe divisão por zero!");

                    rl.close();
                    
                    return;
               }
               resultado = n1 / n2;

			console.log(`O resultado da divisão é: ${resultado}`);

               break;
		default:
			console.log("Operação inválida.");

			rl.close(); //Encerra o processo, após o segundo número ser processado e o resultado ser exibido

			return;
	}

	rl.close(); //Encerra o processo, após o segundo número ser processado e o resultado ser exibido
}

rl.question('Digite o primeiro número: ', (primeiroNumero) => { //Exibe a pergunta pro usuário que recebe ela como primeiroNumero e converte para float
	const numero1 = parseFloat(primeiroNumero);

	rl.question('Digite o segundo número: ', (segundoNumero) => { //Exibe a pergunta pro usuário que recebe ela como segundoNumero e converte para float
		const numero2 = parseFloat(segundoNumero);

		rl.question('Digite a operação que deseja calcular (1 - Adição ; 2 - Subtração ; 3 - Multiplicação ; 4 - Divisão): ', (operacao) => {
			const operacaoFloat = parseFloat(operacao);

			calcular(numero1, numero2, operacaoFloat);
		});
	});
});