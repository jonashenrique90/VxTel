## VxTel
Show me the code

## GUIA DE INSTALAÇÃO

## BackEnd

Entre na pasta backend e execute:

 ```bash
 $ yarn
```
Crie um database novo no postgres e configure a conexão de acordo com o arquivo ormconfig.json:
```bash
"type": "postgres",
"host": "localhost",
"port": 5432,
"username": "postgres",
"password": "docker",
"database": "vxtel",
```
Executar as Migrations:
```bash
$ yarn typeorm migration:run
```
Executar os Seeds:
```bash
$ yarn seed:run
```
Server
```bash
$ yarn dev:serve
```

## Front

Após iniciar o server entre na pasta front e execute:
```bash
$ yarn
```
Para iniciar o projeto execute:
```bash
$ yarn start
```

## Testes

Para rodar os testes entre na pasta backend e execute o comando:

```bash
$ yarn test
```

Após a execução dos testes entre na pasta covarege/lcov-report e abra o arquivo index.html em um navegador para visualizar os testes.
