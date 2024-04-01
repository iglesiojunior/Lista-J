import { question } from "readline-sync"

function mostrar(mensagem){
    console.log(mensagem)
}

function pegar_numero(mensagem){
    return Number(question(mensagem))
 }
 
 
 function main(){
    let investimento_mês
    let juros_mensais
    let confirmação = 's'
    let juros_compostos
    while(confirmação === 's'){
        investimento_mês = pegar_numero('Insira o valor que será investido mensalmente: ')
        juros_mensais = pegar_numero('Insira a taxa mensal de investimento: ')
        juros_compostos = (investimento_mês*(1+(juros_mensais/100))**12)
       
    mostrar(`${juros_compostos*11}`)
    confirmação = question('você deseja fazer uma nova simulação(s ou n): ')
 }
 }
 main()