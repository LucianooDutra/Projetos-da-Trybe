const chai = require('chai');
const sinon = require('sinon');

const { expect } = chai;

const { productsModel } = require('../../../src/models');
const connection = require('../../../src/models/connection');

const products = require('./mocks/productsModel.mock');

describe('Verificando Model Products', function () {

  afterEach(sinon.restore);

  describe('Listando produtos', function () {

    beforeEach(function () {
      sinon.stub(connection, 'execute').resolves([products]);
    });

    afterEach(sinon.restore);

    it('é chamado o json com a lista de produtos', async function () {

      const result = await productsModel.getProducts();
      // console.log(result);
      // console.log(products);

      expect(result).to.deep.equal(products);
    });
  });

  describe('buscando produto pelo id', function () {

    beforeEach(function () {
      sinon.stub(productsModel, 'getById').resolves(products[1]);
    });

    afterEach(sinon.restore);

    it('é chamado o json com 1 produto', async function () {

      const result = await productsModel.getById(2);

      expect(result).to.deep.equal(products[1]);
    });
  });

  describe('buscando produto pelo id, em caso de error', function () {

    afterEach(sinon.restore);

    it('é chamado o json com Product not found', async function () {

      const productNotFound = {
        status: 404,
        message: 'Product not found',
      };

      sinon.stub(productsModel, 'getById').resolves(productNotFound.message);

      const result = await productsModel.getById(999);

      expect(result).to.deep.equal('Product not found');
    });
  });

  describe('criando um novo produto pelo nome', function () {

    const resultado = { insertId: 4, name: 'teclado' };

    beforeEach(function () {
      sinon.stub(connection, 'execute').resolves([resultado]);
    });

    afterEach(sinon.restore);

    it('produto criado com nome valido', async function () {

      const resultado = { id: 4, name: 'teclado' };

      const result = await productsModel.createProducts('teclado');

      // console.log(result);
      // console.log(resultado);
      expect(result).to.deep.equal(resultado);
    });
  });

  describe('modificando um produto com a função updateProduct', function () {

    const sales = { id: 1, name: 'teclado' };

    beforeEach(function () {
      sinon.stub(connection, "execute").resolves(sales);
    });

    afterEach(sinon.restore);

    it('modificando um produto com sucesso', async function () {

      const id = 1;
      const name = 'teclado';

      const result = await productsModel.updateProduct(name, id);

      expect(result).to.deep.equal(sales);
    });
  });

});
