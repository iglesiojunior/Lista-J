import { question } from "readline-sync"

function mostrar(mensagem){
    return console.log(mensagem)
}

function calcular_percentual(canal, audiencia_total){
    const percentual = ((canal/audiencia_total)*100).toFixed(1)
    return [percentual]
}

function pegar_numero(mensagem){
    return Number(question(mensagem))
}

function main(){
    let qual_canal = 1
    let audiencia = 0
    let canal2 = 0
    let canal4 = 0
    let canal5 = 0
    let canal7 = 0
    let canal10 = 0

    while(qual_canal !== 0){
        mostrar('==================================================================================')
        qual_canal = pegar_numero('Inisira o canal que você assistiu: ')
        if(qual_canal !== 0){
        audiencia = pegar_numero(`Insira a quantidade de pessoas que assistiram ao canal ${qual_canal}: `)
        
        if(qual_canal === 2){
            canal2 += audiencia
        }else if(qual_canal === 4){
            canal4 += audiencia
        }else if(qual_canal === 5){
            canal5 += audiencia
        }else if(qual_canal === 7){
            canal7 += audiencia
        }else if(qual_canal === 10){
            canal10 += audiencia
        }else{
            mostrar('Insira um número de canal válido!!')
        }
    }
}
    const audiencia_total = (canal2+canal4+canal5+canal7+canal10)
    const percentuais = [
        calcular_percentual(canal2, audiencia_total),
        calcular_percentual(canal4, audiencia_total),
        calcular_percentual(canal5, audiencia_total),
        calcular_percentual(canal7, audiencia_total),
        calcular_percentual(canal10, audiencia_total),
    ]
    mostrar(`
    ===========================================
    Audiência tv aberta Piauí:
    canal 2: ${percentuais[0]}%
    canal 4: ${percentuais[1]}%
    canal 5: ${percentuais[2]}%
    canal 7: ${percentuais[3]}%
    canal 10: ${percentuais[4]}%
    ===========================================
    `)
}
main()