import { question } from "readline-sync"


function mostrar(mensagem){
   return console.log(mensagem)
}


function pegar_numero(mensagem){
   return Number(question(mensagem))
}


function ranquear_bois(){
   mostrar('===============cartão novo boi===============')
   let num_identificação = pegar_numero('Insira o número de identificação do boi: ')
   let peso = pegar_numero('Insira o peso do boi: ')
   let nome_boi_magro = num_identificação
   let peso_magro = peso
   let nome_boi_gordo = num_identificação
   let peso_gordo = peso
   while(num_identificação !== 0){
      mostrar('===============cartão novo boi===============')
      num_identificação = pegar_numero('Insira o número de identificação do boi: ')
      if(num_identificação !=  0){
      peso = pegar_numero('Insira o peso do boi: ')
      if(peso > peso_gordo){
         peso_gordo = peso
         nome_boi_gordo = num_identificação
      }else if(peso < peso_magro){
         nome_boi_magro = num_identificação
         peso_magro = peso
      }
     }
   }
   const resultado_cartão = `
   ====================pódio====================
   boi mais magro: ${nome_boi_magro}, ${peso_magro}kg
   boi mais gordo: ${nome_boi_gordo}, ${peso_gordo}kg
   ==============================================
   `
   return resultado_cartão
}


function main(){
   const bois = ranquear_bois()

   mostrar(bois)
}
main()
