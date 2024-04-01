import { question } from "readline-sync"

function mostrar(mensagem){
    return console.log(mensagem)
}

function crescimento_populações(cidade_a, cidade_b){
    let contador_anos = 1
    while(cidade_a < cidade_b){
        if(cidade_a > cidade_b){
            mostrar('Digite a população da cidade A maior!!!!')
        }else{
        cidade_a *= 1.035
        cidade_b *= 1.0135
        contador_anos ++}
    }
    return contador_anos
}

function pegar_numero(mensagem){
    return Number(question(mensagem))
}

function main(){
    let cidade_a = pegar_numero('Insira a população da cidade A: ')
    let cidade_b = pegar_numero('Insira a população da cidade B: ')

    const comparação_cidades = crescimento_populações(cidade_a, cidade_b)

    mostrar(`
    ========================================
    Olá!
    População da cidade A:${cidade_a}
    População da cidade B:${cidade_b}
    Anos até as populações serem iguais: ${comparação_cidades}
    ========================================
    `)
}
main()