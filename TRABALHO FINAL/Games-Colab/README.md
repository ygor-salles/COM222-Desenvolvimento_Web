# GAMES COLAB

Será implementado, utilizando a MEAN Stack (Mongo, Express, Angular e Node), um sistema colaborativo para cadastramento, avaliação e consulta de jogos.

----------

## :warning: Considerações importantes

- Usamos do [AngularMaterial](https://material.angular.io/components/categories) para estilização do frontend.
- O Banco de dado MongoDB se encontra hospedado em nuvem. Isso é possível dado o tier *free* do [Mongo Atlas](https://www.mongodb.com/cloud/atlas).
![alt](/assets/gamescolabmongo.gif)
- Na **primeira execução usando o Docker**, é esperado que o sistema demore alguns minutos, pois estará preparando o ambiente.

----------

## Execução (SEM Docker)

Os comandos dessa seção funcionam tanto no Windows, como no Linux.
Nos diretórios `/backend` e `/frontend`:

```bash
npm install && npm start
```

----------

## Execução (COM Docker)

Para um ambiente Docker executar, é necessário ter instalado o [Docker](https://docs.docker.com/engine/install/) e o [Docker Compose](https://docs.docker.com/compose/install/).

Para conferir se já possui ambos instalados, a execução dos dois comandos abaixo deve resultar em uma saída semelhante ao sinalizado pelo `$`.

```sh
docker -v
$ Docker version 19.03.12, build 48a66213fe

docker-compose -v
$ docker-compose version 1.24.1, build 4667896b
```

Deve-se estar no diretório raiz do projeto para prosseguir com os comandos abaixo. Os comandos variam dependendo sistema operacional utilizado.

### Linux

Para criar as imagens:

```bash
make build
```

Para criar as imagens, **se elas não existirem**, e iniciar os containers (comando direto):

```bash
make up
```

Em caso de dúvida sobre as opções de comandos disponíveis execute o `make help`.

### Windows

Para criar as imagens:

```bash
docker-compose build
```

Para criar as imagens, **se elas não existirem**, e iniciar os containers (comando direto - **RECOMENDADO**):

```bash
docker-compose up
```

## Pós-execução

Uma vez que o sistema estiver operante, é possível acessar tanto o frontend, quanto o backend, pelos seguintes links:

- Frontend: <http://localhost:4201>
- Backend: <http://localhost:3001>
