import { question } from "readline-sync"


function mostrar(mensagem){
   return console.log(mensagem)
}


function pegar_numero(mensagem){
   return Number(question(mensagem))
}


function ranquear_candidatas(){
   mostrar('===============cartão novo===============')
   let nome_candidata = question('Insira o nome da competidora: ')
   let peso = pegar_numero('Insira o peso da competidora: ')
   let altura = pegar_numero('Insira a altura da competidora: ')
   let nome_alta = nome_candidata
   let competidora_alta = altura
   let nome_baixa = nome_candidata
   let competidora_baixa = altura
   let nome_magra = nome_candidata
   let competidora_magra = peso
   let nome_gorda = nome_candidata
   let competidora_gorda = peso
   while(nome_candidata !== 'fim'){
      mostrar('===============cartão novo===============')
      nome_candidata = question('Insira o nome da competidora: ')
      if(nome_candidata !=  'fim'){
      peso = pegar_numero('Insira o peso da competidora: ')
      altura = pegar_numero('Insira a altura da competidora: ')
      if(peso > competidora_gorda){
         competidora_gorda = peso
         nome_gorda = nome_candidata
      }else if(peso < competidora_magra){
         nome_magra = nome_candidata
         competidora_magra = peso
      }
      if(altura > competidora_alta){
         nome_alta = nome_candidata
         competidora_alta = altura
      }else if(altura < competidora_baixa){
         nome_baixa = nome_candidata
         competidora_baixa = altura
      }}
   }
   const resultado_cartão = `
   ====================pódio====================
   competidora mais alta: ${nome_alta}, ${competidora_alta}
   competidora mais baixa: ${nome_baixa}, ${competidora_baixa}
   competidora mais magra: ${nome_magra}, ${competidora_magra}
   competidora mais gorda: ${nome_gorda}, ${competidora_gorda}
   ==============================================
   `
   return resultado_cartão
}


function main(){
   const candidatas = ranquear_candidatas()

   mostrar(candidatas)
}
main()
