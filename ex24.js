import { question } from "readline-sync";

function mostrar(mensagem){
    return console.log(mensagem)
}

function pegar_numero(mensagem){
    return Number(question(mensagem))
}

function main(){
    const razão_pa = pegar_numero('Insira a razão de sua PG: ')
    const primeiro_num_pa = pegar_numero('Insira o primeiro termo de sua pg: ')
    const quantidade_numeros = pegar_numero('Insira a quantidade de termos da pg: ')
    let contador_termos = 1

    while(contador_termos < (quantidade_numeros+1)){
        const novo_termo = primeiro_num_pa+(contador_termos-1)*razão_pa
        mostrar(novo_termo)
        contador_termos++
    }
}
main()