const chai = require('chai');
const sinon = require('sinon');

const { expect } = chai;

const { productsService } = require('../../../src/services');
const { productsController } = require('../../../src/controllers');

const products = require('./mocks/productsController.mock');

describe('Verificando controller Products', function () {

  afterEach(sinon.restore);

  describe('Listando produtos', function () {

    beforeEach(function () {
      sinon.stub(productsService, 'getProducts').resolves(products);
    });

    afterEach(sinon.restore);

    it('é chamado o status com o código 200', async function () {

      const res = {};
      const req = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      await productsController.getProducts(req, res);

      expect(res.status.calledWith(200)).to.be.true;
    });

    it('é chamado o json com a lista de produtos', async function () {

      const res = {};
      const req = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      await productsController.getProducts(req, res);

      expect(res.json.calledWith(products)).to.be.true;
    });
  });

  describe('buscando produto pelo id', function () {

    beforeEach(function () {
      sinon.stub(productsService, 'getById').resolves(products[0]);
    });

    afterEach(sinon.restore);

    it('é chamado o status com o código 200', async function () {

      const res = {};
      const req = { params: { id: 1 } };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      await productsController.getProductsById(req, res);

      expect(res.status.calledWith(200)).to.be.true;
    });

    it('é chamado o json com 1 produto', async function () {

      const res = {};
      const req = { params: { id: 1 } };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      await productsController.getProductsById(req, res);

      expect(res.json.calledWith(products[0])).to.be.true;
    });
  });

  describe('buscando produto pelo id, em caso de error', function () {

    afterEach(sinon.restore);

    it('é chamado o status com o código 404', async function () {

      const res = {};
      const req = {};

      const productNotFound = {
        status: 404,
        message: 'Product not found',
      };

      req.params = { id: 'dasdasd' };
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(productsService, 'getById').resolves(productNotFound.status);

      await productsController.getProductsById(req, res);

      expect(res.status.calledWith(200)).to.be.true;
    });

    it('é chamado o json com Product not found', async function () {

      const productNotFound = {
        status: 404,
        message: 'Product not found',
      };

      const res = {};
      const req = { params: { id: 99 } };

      sinon.stub(productsService, 'getById').resolves(productNotFound.message);

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      await productsController.getProductsById(req, res);

      expect(res.json.calledWith(productNotFound.message)).to.be.true;
    });
  });

  describe('criando um novo produto pelo nome', function () {

    afterEach(sinon.restore);

    it('produto criado com nome valido', async function () {

      const result = { id: 4, name: 'teclado' };

      const res = {};
      const req = {};

      req.body = { name: 'teclado' };
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(productsService, 'createProducts').resolves(result);

      await productsController.createProducts(req, res);

      expect(res.status.calledWith(201)).to.be.true;
      expect(res.json.calledWith(result)).to.be.true;
    });
  });


  describe('modificando um produto com a função updateProduct', () => {
    beforeEach(sinon.restore);

    it('modificando um produto com sucesso', async () => {
      const result = {
        id: 1,
        name: 'teclado',
      };

      sinon.stub(productsService, 'updateProduct').returns(result);

      const req = {};
      const res = {};

      req.params = { id: 1 };
      req.body = { name: 'teclado' };
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub();

      await productsController.updateProduct(req, res);

      expect(res.status.calledWith(200)).to.be.true;
      expect(res.json.calledWith(result)).to.be.true;

    });
    it('testando o erro caso não encontre o produto com o Id informado', async () => {

      const productNotFound = { status: 404, message: 'Product not found' };

      sinon.stub(productsService, 'updateProduct').returns(productNotFound);

      const req = {};
      const res = {};

      req.params = { id: 40 };
      req.body = { name: 'teclado' };
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub();

      await productsController.updateProduct(req, res);

      expect(res.status.calledWith(200)).to.be.true;
      expect(res.json.calledWith(productNotFound)).to.be.true;
    });
  });

  describe('Deletando um produto com a função deleteProduct', () => {
    beforeEach(sinon.restore);

    it('Deletando um produto com sucesso', async () => {
      sinon.stub(productsService, 'deleteProduct').returns();

      const req = {};
      const res = {};

      req.params = { id: 1 };
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub();

      await productsController.deleteProduct(req, res);

      expect(res.status.calledWith(204)).to.be.true;
    });
  });
  
});