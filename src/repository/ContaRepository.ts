import { Conta } from "../model/Conta";

export interface ContaRepisotort{
  // CRUD Conta
  procurarPorNumero(numero:number):void;
  listarTodas():void;
  cadastrar(conta:Conta):void;
  atualizar(conta:Conta):void;
  deletar(numero:number):void;

  // Métodos Bancarios
  sacar(numero:number, valor:number):void;
  depositar(numero:number,valor:number):void;
  transferir(numrtoOrigem:number,numeroDestino: number,valor:number):void;
}