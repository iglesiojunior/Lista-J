import { question } from "readline-sync"

function quem_ganhou(tentativa1, tentativa2, jogador1, jogador2){
	if(tentativa1 > tentativa2){
		return print(`${jogador2} venceu!`)
	}else if(tentativa1 === tentativa2){
		return print('O jogo empatou!')
	}else{
		return print(`${jogador1} venceu!`)
	}
}

function pegar_numero(mensagem){
    return Number(question(mensagem))
}

function print(mensagem){
    return console.log(mensagem)
}

function jogo(intervalo, jogador){
	print(`Olá! ${jogador}, seu número foi sorteado!`)
	let contador = 1
    const numerosecreto = Math.floor(Math.random() * (intervalo - 1) + 1)
	let tentativa = pegar_numero("Insira uma tentativa: ")
	while (tentativa != numerosecreto ){
		if (tentativa > numerosecreto){
			print(`${jogador} o número secreto é menor!`)}
		else{
			print(`${jogador} o número secreto é maior!`)}
		contador ++
		tentativa = pegar_numero("Insira uma nova tentativa: ")
		if (tentativa == numerosecreto){
			print('Você acertou o número!!')}
        }
        return contador
    }


function main(){
	const jogador1 = question("Insira o nome do primeiro jogador: ")
	const jogador2 = question("Insira o nome do segundo jogador: ")
	const intervalo = pegar_numero("Insira o número limite do jogo: ")
	const tentativa1 = jogo(intervalo, jogador1)
	const tentativa2 = jogo(intervalo, jogador2)
	const ganhador = quem_ganhou(tentativa1, tentativa2, jogador1, jogador2)
	
	print(`
	========================================================================
	${jogador1}, seu número de tentativas foi de: ${tentativa1} tentativas
	${jogador2}, seu número de tentativas foi de: ${tentativa2} tentativas
	========================================================================
	${ganhador}
	`)
	if(tentativa1 > tentativa2){
		print(`${jogador2} venceu!`)
	}else{
		print(`${jogador1} venceu!`)
	}
}
main()