import { question } from "readline-sync"

function mostrar(mensagem){
    return console.log(mensagem)
}

function dividir_inteiros(num1, num2){
    let parte_inteira = 0
    let resultado_quociente = 0
    let resto_divisão = 0
    while(parte_inteira < num1){
        if(num2 > num1){
            resto_divisão = num1
            parte_inteira = num2
        }else if(num1 > num2){
        if(parte_inteira+num2 > num1){
            resto_divisão = num1-parte_inteira
        }else if(parte_inteira+num2 < num1){
            parte_inteira += num2
            resultado_quociente++
        }
    }
    }
    return [resultado_quociente, resto_divisão]
}

function pegar_numero_int(mensagem){
    return parseInt(question(mensagem))
}

function main(){
    const numero1 = pegar_numero_int('Insira o primeiro numero a ser dividido: ')
    const numero2 = pegar_numero_int('Insira o segundo numero a ser dividido: ')

    const divisão = dividir_inteiros(numero1, numero2)

    mostrar(`
    =============================================================
    Olá, a divisão entre:
    ${numero1}/${numero2} = ${divisão[0]} e resto: ${divisão[1]}
    =============================================================
    `)
}
main()