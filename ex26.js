import { question } from "readline-sync"

function mostrar(mensagem){
    return console.log(mensagem)
}

function pegar_numero(mensagem){
    return Number(question(mensagem))
}

function main(){
    let idade = 0
    let opinião
    let qtd_opinião_regular = 0
    let qtd_opinião_boa = 0 
    let soma_idades_op_otima = 0
    let qts_opinião_ótima = 0
    let total_de_entrevistados = 0

    while(idade !== -1){
        mostrar('====================pesquisa filme=====================')
        idade = pegar_numero('Insira sua idade: ')
        if(idade !== -1){
            opinião = pegar_numero(`
            Insira sua opinião sobre o filme:
            (1 = ótimo)
            (2 = bom)
            (3 = regular)
            (4 = péssimo )
            : 
            `)
            total_de_entrevistados++
            if(opinião === 1){
                soma_idades_op_otima += idade
                qts_opinião_ótima++
            }else if(opinião === 2){
                qtd_opinião_boa++
            }else if(opinião === 3){
                qtd_opinião_regular++
            }


        }
    }
    //pós processamento while
    const media_idades_ótimo = soma_idades_op_otima/qts_opinião_ótima
        const percentual_opinião_boa = (qtd_opinião_boa/total_de_entrevistados)*100

    mostrar(`
    ======================================================================
    Resultado pesquisa:
    média de idades das pessoas que responderam ótimo: ${media_idades_ótimo}
    quantidade de pessoas que respondeu regular: ${qtd_opinião_regular}
    percentual de pessoas que respondeu bom entre os entrevistados: ${percentual_opinião_boa}%
    ======================================================================
    `)
}
main()