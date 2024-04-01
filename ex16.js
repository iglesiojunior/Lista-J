import { question } from "readline-sync"


function mostrar(mensagem){
   return console.log(mensagem)
}


function pegar_numero(mensagem){
   return Number(question(mensagem))
}


function main(){
   let valor_emprestimo = pegar_numero('Insira o valor do seu empréstimo: ')
   const valor_dvida = valor_emprestimo
   const pagamento_diario = pegar_numero('Insira o valor da parcela: ')
   let contador_dias = 0
   while(valor_emprestimo > 0){
       contador_dias ++
       if(contador_dias%7 !== 0 || contador_dias === ((contador_dias%7)+1)){
           valor_emprestimo -= pagamento_diario
       }
       valor_emprestimo += valor_emprestimo*0.0085
   }


   mostrar(`
   ===============================================
   Olá, caro devedor!
   A sua dívida de empréstimo de: R$${valor_dvida.toFixed(2)}
   poderá ser quitada com: ${contador_dias}dias
   ===============================================
   `)
}
main()