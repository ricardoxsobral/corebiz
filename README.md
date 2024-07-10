# Projeto CoreBiz

Este é um projeto de exemplo utilizando React, Material UI, e várias outras bibliotecas para criar uma aplicação web.

## Pré-requisitos

Certifique-se de ter instalado o Node.js (versão 14 ou superior) e o npm (gerenciador de pacotes do Node.js).

- [Node](https://nodejs.org/docs/latest/api/)

## Instalação

1. **Clone o repositório:**

    ```bash
   git clone git@github.com:ricardoxsobral/corebiz.git
   cd corebiz

2. **Instale o React:**

    ```bash
   npm install
   npm run dev

3. **Abra outro terminal e inicilize a porta 3001, para rodar o mock da API :**

    ```bash
   npm install -g json-server 
   json-server --watch db.json --port 3001

4. **Abra outro terminal e inicilize a porta 3002, para rodar o servidor dos Assinantes da newsletter :**

    ```bash
   npm install express (caso não tenha instalado o express em sua máquina ainda) 
   node server/server.js

5. **Acesse a aplicação:**

    Digite "http://localhost:5173/" ou acesse 'https://corebiz-rho.vercel.app/'


