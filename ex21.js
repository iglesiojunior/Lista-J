import { question } from "readline-sync"

function mostrar(mensagem){
    return console.log(mensagem)
}

function multiplicar_inteiros(num1, num2){
    let contador_multiplicador = num2
    let resultado_ultiplicação = 0
    while(contador_multiplicador > 0){
        resultado_ultiplicação += num1
        contador_multiplicador--
    }
    return resultado_ultiplicação
}

function pegar_numero_int(mensagem){
    return parseInt(question(mensagem))
}

function main(){
    const numero1 = pegar_numero_int('Insira o primeiro numero a ser multiplicado: ')
    const numero2 = pegar_numero_int('Insira o segundo numero a ser multiplicado: ')

    const multiplicação = multiplicar_inteiros(numero1, numero2)

    mostrar(`
    ===========================================
    Olá, a multiplicação entre:
    ${numero1}x${numero2} = ${multiplicação}
    ===========================================
    `)
}
main()