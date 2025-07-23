import * as readline from "readline"; //O módulo readline permite ler entradas do usuário no terminal

const rl = readline.createInterface({ //Interface de leitura que permite a entrada e a saída de dados
	input: process.stdin,
	output: process.stdout,
});

function calcular() {
	rl.question('Digite o primeiro número: ', (primeiroNumero) => {
		const numero1 = parseFloat(primeiroNumero);

		rl.question('Digite o segundo número: ', (segundoNumero) => {
			const numero2 = parseFloat(segundoNumero);

			const resultado = numero1 + numero2;

			console.log(`O resultado da adição é: ${resultado}`);

			rl.close();
		});
	});
}

calcular();