## VxTel
Show me the code

## GUIA DE INSTALAÇÃO

## BackEnd

1 - Entre na pasta backend e execute:

 $ yarn
 
2 - Copie o arquivo ormconfig.example.json:
 
 $ cp ormconfig.example.json ormconfig.json
 
3 - Crie um database novo no postgres e configure a conexão de acordo com o arquivo ormconfig.json:

"type": "postgres",
"host": "localhost",
"port": 5432,
"username": "postgres",
"password": "docker",
"database": "vxtel",

4 - Executar as Migrations:

$ yarn typeorm migration:run

5 - Executar os Seeds:

$ yarn seed:run

6 Executar o Server

$ yarn dev:server


## Front

1 - Após iniciar o server entre na pasta front e execute:

$ yarn

2 - Para iniciar o projeto execute:

$ yarn start

## Testes

Para rodar os testes entre na pasta backend e execute o comando:

$ yarn test

Após a execução dos testes entre na pasta covarege/lcov-report e abra o arquivo index.html em um navegador para visualizar os testes.
