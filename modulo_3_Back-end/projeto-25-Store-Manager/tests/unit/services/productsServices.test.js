const chai = require('chai');
const sinon = require('sinon');

const { expect } = chai;

const { productsService } = require('../../../src/services');
const { productsModel } = require('../../../src/models');

const products = require('./mocks/productsServices.mock');

describe('Verificando services Products', function () {

  afterEach(sinon.restore);

  describe('Listando produtos', function () {

    beforeEach(function () {
      sinon.stub(productsModel, 'getProducts').resolves(products);
    });

    afterEach(sinon.restore);

    it('é chamado o json com a lista de produtos', async function () {

      const result = await productsService.getProducts();

      expect(result).to.deep.equal(products);
    });
  });

  describe('buscando produto pelo id', function () {

    beforeEach(function () {
      sinon.stub(productsModel, 'getById').resolves(products[0]);
    });

    afterEach(sinon.restore);

    it('é chamado o json com 1 produto', async function () {

      const result = await productsService.getById(1);

      expect(result).to.deep.equal(products[0]);
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

      const result = await productsService.getById(999);

      expect(result).to.deep.equal('Product not found');
    });
  });

  describe('criando um novo produto pelo nome', function () {

    afterEach(sinon.restore);

    it('produto criado com nome valido', async function () {

      const resultado = { id: 4, name: 'teclado' };

      sinon.stub(productsModel, 'createProducts').resolves(resultado);

      const result = await productsService.createProducts('teclado');

      expect(result).to.deep.equal(resultado);
    });
  });

  describe('modificando um produto com a função updateProduct', function () {

    const sales = { id: 1, name: 'teclado' };

    beforeEach(function () {
      sinon.stub(productsModel, 'updateProduct').resolves(sales);
    });

    afterEach(sinon.restore);

    it('modificando um produto com sucesso', async () => {

      const id = 1;
      const name = 'teclado';

      const result = await productsService.updateProduct(name, id);

      expect(result).to.deep.equal(sales);
    });
  });

});