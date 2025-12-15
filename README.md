# 🏦 Projeto Conta Bancária - Generation Brasil

Projeto desenvolvido como parte do currículo do Bootcamp da **Generation Brasil**, simulando o sistema de gerenciamento de um banco via console.

O objetivo principal foi consolidar os conceitos de **Programação Orientada a Objetos (POO)** utilizando **TypeScript**.

## 💻 Sobre o Projeto

O "Banco do Brazil com Z" é uma aplicação de linha de comando (CLI) que permite realizar operações bancárias clássicas. O projeto foi estruturado utilizando o padrão MVC (Model-View-Controller) e utiliza uma interface de repositório para gerenciar os métodos abstratos.

### 🚀 Tecnologias Utilizadas

* ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) **TypeScript**
* ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) **Node.js**
* **Readline-Sync**: Para entrada de dados via terminal.
* **Colors**: Para estilização e feedback visual no console.

## ⚙️ Funcionalidades

O sistema conta com um menu interativo que oferece as seguintes opções:

1.  **Criar Conta**: Criação de contas do tipo *Corrente* (com limite) ou *Poupança* (com aniversário).
2.  **Listar todas as Contas**: Exibe os dados de todas as contas cadastradas.
3.  **Buscar Conta por Número**: Localiza uma conta específica.
4.  **Atualizar Dados da Conta**: Permite alterar os dados de uma conta existente.
5.  **Apagar Conta**: Remove uma conta do sistema.
6.  **Sacar**: Realiza saque (com validação de saldo/limite).
7.  **Depositar**: Adiciona saldo à conta.
8.  **Transferir**: Transfere valores entre contas (valida a existência de ambas e o saldo da origem).

## 📂 Estrutura do Projeto

O projeto segue uma arquitetura organizada:

* **Model (`src/model`)**:
    * `Conta.ts`: Classe abstrata base.
    * `ContaCorrente.ts`: Herda de Conta (atributo adicional: *limite*).
    * `ContaPoupanca.ts`: Herda de Conta (atributo adicional: *aniversário*).
* **Repository (`src/repository`)**:
    * `ContaRepository.ts`: Interface que define os métodos obrigatórios (CRUD e bancários).
* **Controller (`src/controller`)**:
    * `ContaController.ts`: Implementa a interface e contém a lógica de negócios e manipulação da lista de contas.
* **View (`Menu.ts`)**:
    * Ponto de entrada da aplicação, contendo o loop principal e a interação com o usuário.

## 🛠️ Como executar o projeto

### Pré-requisitos
Certifique-se de ter o [Node.js](https://nodejs.org/) instalado em sua máquina.

## 👨‍💻 Autor

Desenvolvido por **Felipe Gonçalves Rodrigues**
