import { question } from "readline-sync"

function mostrar(mensagem){
    return console.log(mensagem)
}

function  pegar_numero(mensagem){
    return Number(question(mensagem))
}

function main(){
    //usei como flag da questão = 0, pois a questão não detalhou direito os pormenores
    let distancia_entre_medições
    let consumo_entre_pontos
    while(distancia_entre_medições !== 0){
        mostrar('==================dispositivo de desempenho==================')
        distancia_entre_medições = pegar_numero('Insira a distância entre o ponto anterior e o atual em km(0 para encerrar): ')
        
        if(distancia_entre_medições !== 0){
            consumo_entre_pontos = pegar_numero(`Insira o consumo de gasolina em ${distancia_entre_medições}km: `)
        
            let media_deslocamento = (distancia_entre_medições/consumo_entre_pontos)
            let deslocamento_total = media_deslocamento*50
        
        if(deslocamento_total < 600){
            mostrar('============================resultado=================================')
            mostrar(`
Olá, infelizmente seu carro não conseguiu concluir a viagem :(
O veículo pecorreu um total de: ${deslocamento_total} com 50 litros
Consumo km/l: ${media_deslocamento}
            `)
        }else{
            mostrar('=======================resultado========================')
            mostrar(`
Olá, seu veículo conseguiu pecorrer os 600 km!!!
O veículo pecorreu um total de: ${deslocamento_total}
Consumo em km/l: ${media_deslocamento}
            `)
        }

    }
}
}
main()