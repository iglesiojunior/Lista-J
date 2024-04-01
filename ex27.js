import { question } from "readline-sync"

function pegar_numero(mensagem){
    return Number(question(mensagem))
}

function main(){
    let sexo
    let estado_civil
    let qtd_homens = 0
    let idade_mulheres = 0
    let qtd_mulher = 0
    let idade_homens = 0
    let homens_solteiros = 0
    let mulheres_solteiras = 0
    let mulheres_divorciadas = 0
    let contador_pessoas = 100
    while(contador_pessoas > 0){
        sexo = question('Insira o seu sexo(m ou f): ')
        if(sexo.toLowerCase() === 'm'){
            qtd_homens++
            idade_homens += pegar_numero('Insira sua idade: ')
            estado_civil = pegar_numero(`
            Insira seu estado civil:
            (1= casado)
            (2 = solteiro)
            (3 = divorciado)
            (4= viúvo)

            `)
            if(estado_civil === 2){
                homens_solteiros++
            }  
        }else if(sexo.toLowerCase() === 'f'){
            
            qtd_mulher
            idade_mulheres += pegar_numero('Insira sua idade: ')
            estado_civil = pegar_numero(`
            Insira seu estado civil:
            (1= casado)
            (2 = solteiro)
            (3 = divorciado)
            (4= viúvo)

            `)
            if(estado_civil === 2){
                mulheres_solteiras++
            }else if(estado_civil === 3){
                mulheres_divorciadas++
            }
        }
    }
    //pós processamento while
    const media_idade_h = idade_homens/

}
main()