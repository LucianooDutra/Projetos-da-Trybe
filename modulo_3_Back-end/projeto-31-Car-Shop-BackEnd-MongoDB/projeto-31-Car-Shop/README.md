# Projeto Car Shop!

## Sobre o projeto:

  Neste projeto foi aplicado os princípios de Programação Orientada a Objetos (`POO`) para a construção de uma API com `CRUD` para gerenciar uma concessionária de veículos. Utilizando o banco de dados `MongoDB` através do framework do `Mongoose`.


# Técnologias utilizadas:

 - TypeScript;
 - Node;
 - Mongoose;
 - Express;
 - MongoDB;
 - POO, Programação orientação a objetos
 - Docker
 - ES6;
 - Testes: Mocha, Chai e Sinon;
 
## Executando a aplicação

## Instalando as dependências

<details>

  ```json
    git clone git@github.com:LucianooDutra/Projetos-da-Trybe.git
    cd modulo_3_Back-end/projeto-31-Car-Shop-BackEnd-MongoDB/projeto-31-Car-Shop/ 
    npm install
  ```

</details>

<details>

## Utilizando o Docker
  Para rodar a aplicação você vai precisar ter o [Docker](https://docs.docker.com/engine/install/ubuntu/) instalado e usar os seguintes comandos no terminal:
  - Entre na pasta do projeto e acesse:

  ```json
    docker-compose up -d
  ```
  
  - Lembre-se de parar o `mongo` se estiver usando localmente na porta padrão (`27017`), ou adapte, caso queria fazer uso da aplicação em containers
  - Esses serviços irão inicializar um container chamado `car_shop` e outro chamado `car_shop_db`.
  - A partir daqui você pode rodar o container `car_shop` via CLI ou abri-lo no VS Code.
  
   ```json
    docker exec -it car_shop bash
    npm install
  ```

## Sem o Docker

  Para rodar o projeto desta forma, obrigatoriamente você deve ter o `node` instalado em seu computador.
  - Entre na pasta do projeto e acesse:
  
  ```json
    npm install
    npm run dev
  ```
  
  - Após os comandos o projeto já estará rodando na sua máquina.

</details>

## Para rodar o back-end

<details>
 <summary><strong>Observações:</strong></summary><br />

Para realizar as requisições em back-end, você pode usar a extensão Thunder Client do VSCode ou os clientes HTTP Postman ou Insomnia.

  - [Thunder Client](https://www.thunderclient.com/)
  - [Postman](https://www.postman.com/)
  - [Insomnia](https://insomnia.rest/)

</details>

## Endpoints

<details>
 <summary><strong>Cars</strong></summary><br />
 
 - Para cadastra um novo carro na lista, utilize o método POST com a URL http://localhost:3001/cars e na aba Body o json abaixo:
 
  ```json
  {
    "model": "Marea",
    "year": 2002,
    "color": "Black",
    "status": true,
    "buyValue": 15.990,
    "doorsQty": 4,
    "seatsQty": 5
  }
  ```

 - Para pesquisar os carros cadastrados, utilize o método GET com a URL http://localhost:3001/cars;

 - Para pesquisar um carro pelo seu id, utilize o método GET com a URL http://localhost:3001/cars/"ID GERADO NO CADASTRO";
 
 - Para atualizar dados do cadastro do carro, utilizar o método PUT com a URL http://localhost:3001/cars/"ID GERADO NO CADASTRO" e na aba Body o json abaixo:
 
   ```json
   
  {
    "model": "Gol",
    "year": 2000,
    "color": "Black",
    "status": true,
    "buyValue": 13.000,
    "doorsQty": 4,
    "seatsQty": 5
  }
  ```
  
  - Para excluir um carro pelo seu id, utilize o método DELETE com a URL http://localhost:3001/cars/"ID GERADO NO CADASTRO";

</details>
</details>

<details>
 <summary><strong>Motorcycle</strong></summary><br />
 
 - Para cadastra uma nova moto na lista, utilize o método POST com a URL http://localhost:3001/motorcycles e na aba Body o json abaixo:
 
  ```json
  {
    "model": "Honda Cb 600f Hornet",
    "year": 2005,
    "color": "Yellow",
    "status": true,
    "buyValue": 30.000,
    "category": "Street",
    "engineCapacity": 600
  }
  ```

 - Para pesquisar as motos cadastradas, utilize o método GET com a URL http://localhost:3001/motorcycles;

 - Para pesquisar uma moto pelo seu id, utilize o método GET com a URL http://localhost:3001/motorcycles/"ID GERADO NO CADASTRO";
 
 - Para atualizar dados do cadastro da moto, utilizar o método PUT com a URL http://localhost:3001/motorcycles/"ID GERADO NO CADASTRO" e na aba Body o json abaixo:
 
  ```json
  {
    "model": "Honda Cb 600f Hornet",
    "year": 2010,
    "color": "Black",
    "status": true,
    "buyValue": 45.000,
    "category": "Street",
    "engineCapacity": 600
  }
  ```
  
  - Para excluir uma moto pelo seu id, utilize o método DELETE com a URL http://localhost:3001/motorcycles/"ID GERADO NO CADASTRO";

</details>
</details>

## Executando os testes

<details>
 <summary><strong>Testes</strong></summary><br />

 Foi utilizado o Mocha, Chai e Sinon para a realização dos testes, unitários;

- Para rodar todos os testes:

  ```json
    npm run test:coverage

    ou

    npm run test:mocha
  ```

</details>
</details>
