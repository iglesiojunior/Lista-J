import { question } from "readline-sync"

function print(mensagem){
    return console.log(mensagem)
}

function pegar_numero(mensagem){
    return Number(question(mensagem))
}

function main(){
    let nome_produto
    let preço_produto
    let qtd_produto
    while(nome_produto != 'fim'){
        nome_produto = question('Insira o nome do produto: ')
        if(nome_produto != 'fim'){
        preço_produto = pegar_numero('Insira o preço unitário do produto: ')
        qtd_produto = pegar_numero('Insira a quantidade do produto que você comprou: ')
        const preço_final = preço_produto*qtd_produto
        if(qtd_produto <= 10){
            print(`
            O produto ${nome_produto} não obteve desconto pela quantidade de itens.
            Valor total: ${preço_produto*qtd_produto}
            `)
        }else if(qtd_produto > 10 && qtd_produto <= 20){
            print(`
            O produto ${nome_produto} obteve desconto pela quantidade de itens.
            Valor total: ${(preço_final-(preço_final*0.1))}
            `)   
        }else if(qtd_produto > 20 && qtd_produto <= 50){
            print(`
            O produto ${nome_produto} obteve desconto pela quantidade de itens.
            Valor total: ${(preço_final-(preço_final*0.2))}
            `) 
    }else if(qtd_produto > 50){
        print(`
        O produto ${nome_produto} obteve desconto pela quantidade de itens.
        Valor total: ${(preço_final-(preço_final*0.25))}
        `) 
}
    }
}
}
main()