******************* PASSOS PARA INICIALIZAR UMA APLICAÇÃO ANGULAR PELO NODE ****************************

1 - Dentro da pasta do seu projeto Criar a pasta backend

2 - Abrir o VsCode e o terminal nessa pasta do projeto

----------------------------------------------------------------------------------------
INICIALIZANDO O BACKEND COM NODEJS
3 - Dentro de Backend criar o arquivo package.json com o comando:
npm init -y

4 - Na pasta Backend criar as dependencias para construção da API:
npm i json-server

5 - Em Backend Criar um arquivo db.json, e inserir os dados dentro de um 
objeto json nesse arquivo. Exemplo:
{
    "products": [{
        "id": 1,
        "name": "Caneta BIC preta",
        "price": 5.89
    }]
}

6 - No arquivo package.json definir a porta com que será startado o servidor.
Apagar o que estiver debtro de "scripts" e inserir o seguinte trecho, como ex:
"start": "json-server --watch db.json --port 3001"

* O backend já está configurado, basta executar o comando 'npm start' para inicializar o servidor backend.
Como teste pode se utilizar a ferramenta do Postman para verificar se os dados estão sendo enviados corretamente, 
seguindo este exemplo basta colocal o link localhost:3001 no Postamn e executar um GET no Postman

----------------------------------------------------------------------------------------
INICIALIZANDO O FRONTEND COM ANGULAR

7 - Abrir um novo terminal e deixar o terminal do backend rodando. Dentro da pasta do projeto para instalar o angular
executar o comando abaixo CASO NÃO TENHA O ANGULAR NA SUA MÁQUINA:
npm i -g @angular/cli

8 - Para criar o projeto frontend, Executar o comando:
ng new frontend --minimal
---> Será criada uma pasta frontend. O minimal é para projetos mais pequenos

9 - Para inserir as rotas: 
y

10 - Qual o tipo CSS ou pre processador CSS
CSS

11 - Dentro da pasta de frontend startar o servidor frontend:
npm start

para trocar a porta, exemplo:
ng serve --host 0.0.0.0 --port 4201
Ou você pode trocar de forma permanete em package.json, no objeto script no atributo start definir a porta a ser startada:
"scripts": {
    "ng": "ng",
    "start": "ng serve --port 4201",
    "build": "ng build",
    "test": "ng test",
    "lint": "ng lint",
    "e2e": "ng e2e"
  },

*O frontend já está funcionando basta acessar no browser com a porta 4200 que é o padrão do Angular 








