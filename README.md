# Estrutura projedo NodeJS
#### Template base para criação de projetos backend
[![N|Solid](https://www.kanhasoft.com/assets/images/nodejs-icon.png)](https://nodejs.org/)

## Features
- Criação de usuários
- Consulta de informacões do usuário
- Autenticação e proteção de rotas
- Consulta de CEP

## Tech:
- [Node.js] - evented I/O for the backend
- [Express] - fast node.js network app framework [@tjholowaychuk]

## Installation

Versão utilizada [Node.js](https://nodejs.org/) v20.13.1.

Configure as variáveis de ambiente:
```sh
cp .env.example .env
```
Defina a variável de ambiente JWT_SECRET
```env
JWT_SECRET=hash_gerado
```

Configure a variável DATABASE_URL
```env
DATABASE_URL="postgresql://username:password@localhost:5432/database_name?schema=public"
```

Instale as dependências e inicie o servidor.

Utilizando NPM:
```sh
npm i
npm run dev
```
Utilizando YARN:
```sh
yarn
yarn dev
```


## Packages

| Package | Descrição |
| ------ | ------ | 
| [prisma](https://www.npmjs.com/package/prisma) | Prisma Client JS é um construtor de consultas gerado automaticamente que permite acesso ao banco de dados com segurança |
| [@prisma/client](https://www.npmjs.com/package/@prisma/client) | Faz parte do ecossistema Prisma . Prisma fornece ferramentas de banco de dados para acesso a dados, modelagem declarativa de dados, migrações de esquemas e gerenciamento visual de dados. |
| [axios](https://www.npmjs.com/package/axios) | Cliente HTTP baseado em promessa para o navegador e node.js |
| [bcryptjs](https://www.npmjs.com/package/bcryptjs) | Utilizado para criar o hash das senhas |
| [cors](https://www.npmjs.com/package/cors) | CORS é um pacote node.js para fornecer um middleware Connect / Express que pode ser usado para habilitar o CORS com várias opções. |
| [dotenv](https://www.npmjs.com/package/dotenv) | Dotenv é um módulo de dependência zero que carrega variáveis ​​de ambiente de um .envarquivo em process.env. |
| [express](https://www.npmjs.com/package/express) | Estrutura da web rápida, sem opinião e minimalista para Node.js. |
| [express-async-errors](https://www.npmjs.com/package/express-async-errors) | Utilizado para tratar erros na aplicação |
| [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) | Utilizado para criar tokens de autenticação |


## License

MIT

**Free Software, Hell Yeah!**
