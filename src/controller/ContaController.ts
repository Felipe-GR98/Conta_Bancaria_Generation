import { Conta } from "../model/Conta";
import { ContaRepisotory } from "../repository/ContaRepository";
import { colors } from "../util/Colors";

export class ContaController implements ContaRepisotory{
  
   private listarContas : Array<Conta> = new Array<Conta>();
    numero : number = 0

    public gerarNumero():number{
      return ++ this.numero
    }
  
  procurarPorNumero(numero: number): void {
    let buscarConta = this.bucarNoArray(numero);

    if(buscarConta != null){
      buscarConta.visualizar();
    }else{
      console.log(`${colors.fg.red} A Conta de número ${numero} Não foi Encontrada! ${colors.reset}`)
    }
  }

    listarTodas(): void {
      for(let conta of this.listarContas ){
          conta.visualizar()
      }
    }

    cadastrar(conta: Conta): void {
      this.listarContas.push(conta)
      console.log(`${colors.fg.green} A Conta de número ${conta.numero} Foi criada com Sucesso ! ${colors.reset}`)
    }

    atualizar(conta: Conta): void {
      let buscarConta = this.bucarNoArray(conta.numero);

      if(buscarConta != null){
        this.listarContas[this.listarContas.indexOf(buscarConta)] = conta;
        console.log(`${colors.fg.green} A Conta de número ${conta.numero} Foi atualizada com sucesso! ${colors.reset}`)
      }else{
        console.log(`${colors.fg.red} A Conta de número ${conta.numero} Não foi Encontrada! ${colors.reset}`)
      }

    }

    deletar(numero: number): void {
      let buscarConta = this.bucarNoArray(numero)

        if(buscarConta != null){
          this.listarContas.splice(this.listarContas.indexOf(buscarConta),1)
          console.log(`${colors.fg.green} A Conta de número ${numero} Foi Apagada com sucesso! ${colors.reset}`)
        }else{
          console.log(`${colors.fg.red} A Conta de número ${numero} Não foi Encontrada! ${colors.reset}`)
        }
      }

    sacar(numero: number, valor: number): void {
      let conta = this.bucarNoArray(numero)

        if(conta != null){
          console.log(`${colors.fg.green} o Saque na conta de número ${numero} Foi Efetuado com sucesso! ${colors.reset}`)
        }else{
          console.log(`${colors.fg.red} A Conta de número ${numero} Não foi Encontrada! ${colors.reset}`)
        }
    }

    depositar(numero: number, valor: number): void {
      let conta = this.bucarNoArray(numero)

        if(conta != null){
          console.log(`${colors.fg.green} o Deposito na conta de número ${numero} Foi Efetuado com sucesso! ${colors.reset}`)
        }else{
          console.log(`${colors.fg.red} A Conta de número ${numero} Não foi Encontrada! ${colors.reset}`)
        }

    }


    transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
      let contaOrigem = this.bucarNoArray(numeroOrigem) 
      let contaDestino = this.bucarNoArray(numeroDestino)

      if(contaOrigem != null && contaDestino != null){
        if(contaOrigem.sacar(valor) == true){
          contaDestino.depositar(valor)
          console.log(`${colors.fg.green} A Tranferência conta de número ${numeroOrigem} para a conta ${numeroDestino} Foi Efetuado com sucesso! ${colors.reset}`)
        }else{
          console.log(`${colors.fg.red} A Conta de numero  ${numeroOrigem} ou a conta de numero ${numeroDestino} Não foram Encontradas! ${colors.reset}`)
        }
      }

    }

    public bucarNoArray(numero: number): Conta | null{
      
      for(let conta of this.listarContas ){
        if(conta.numero === numero){
          return conta;
        }
      }
      return null;
    }

}