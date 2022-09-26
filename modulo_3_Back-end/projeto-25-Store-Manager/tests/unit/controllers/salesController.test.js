const chai = require('chai');
const sinon = require('sinon');

const { expect } = chai;

const { salesService } = require('../../../src/services');
const { salesController } = require('../../../src/controllers');

describe('Verificando sales controller', function () {

  afterEach(sinon.restore);

  describe('criando nova sales', function () {

    afterEach(sinon.restore);

    it('sales criado com dados validos', async function () {

      const result = {
        id: 3,
        itemsSold: [
          { productId: 3, quantity: 3 },
          { productId: 2, quantity: 2 },
          { productId: 1, quantity: 1 },
        ]
      };

      const data = [
        { productId: 3, quantity: 3 },
        { productId: 2, quantity: 2 },
        { productId: 1, quantity: 1 },
      ];

      const res = {};
      const req = {};

      req.body = data;
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(salesService, 'createSales').resolves(result);

      await salesController.createSales(req, res);

      expect(res.status.calledWith(201)).to.be.true;
      expect(res.json.calledWith(result)).to.be.true;
    });
  });

  describe('Listando sales', function () {

    const sales = [
      {
        saleId: 1,
        date: '2022-09-13T18:09:10.000Z',
        productId: 1,
        quantity: 5
      },
      {
        saleId: 1,
        date: '2022-09-13T18:09:10.000Z',
        productId: 2,
        quantity: 10
      },
      {
        saleId: 2,
        date: '2022-09-13T18:09:10.000Z',
        productId: 3,
        quantity: 15
      }
    ];

    beforeEach(function () {
      sinon.stub(salesService, 'getSales').resolves(sales);
    });

    afterEach(sinon.restore);

    it('é chamado o status com o código 200', async function () {

      const res = {};
      const req = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      await salesController.getSales(req, res);

      expect(res.status.calledWith(200)).to.be.true;
    });

    it('é chamado o json com a lista de sales', async function () {

      const res = {};
      const req = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      await salesController.getSales(req, res);

      expect(res.json.calledWith(sales)).to.be.true;
    });
  });

  describe('buscando sale pelo id', function () {

    const sales = [
      {
        date: '2022-09-13T18:09:10.000Z',
        productId: 1,
        quantity: 5
      },
      {
        date: '2022-09-13T18:09:10.000Z',
        productId: 2,
        quantity: 10
      },
    ];

    beforeEach(function () {
      sinon.stub(salesService, 'getSalesById').resolves(sales);
    });

    afterEach(sinon.restore);

    it('é chamado o status com o código 200', async function () {

      const res = {};
      const req = { params: { id: 1 } };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      await salesController.getSalesById(req, res);

      expect(res.status.calledWith(200)).to.be.true;
    });

    it('é chamado o json com 1 produto', async function () {

      const res = {};
      const req = { params: { id: 1 } };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      await salesController.getSalesById(req, res);

      expect(res.json.calledWith(sales)).to.be.true;
    });
  });

  describe('buscando sale pelo id, em caso de error', function () {

    afterEach(sinon.restore);

    it('é chamado o status com o código 404', async function () {

      const res = {};
      const req = {};

      const productNotFound = {
        status: 404,
        message: 'Sale not found',
      };

      req.params = { id: 99 };
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(salesService, 'getSalesById').resolves(productNotFound);

      await salesController.getSalesById(req, res);

      expect(res.status.calledWith(200)).to.be.true;
    });

    it('é chamado o json com Sale not found', async function () {

      const productNotFound = {
        status: 404,
        message: 'Sale not found',
      };

      const res = {};
      const req = { params: { id: 99 } };

      sinon.stub(salesService, 'getSalesById').resolves(productNotFound.message);

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      await salesController.getSalesById(req, res);

      expect(res.json.calledWith(productNotFound.message)).to.be.true;
    });
  });

  describe('Deletando um sale com a função deleteSale', () => {
    beforeEach(sinon.restore);

    it('Deletando um sale com sucesso', async () => {
      sinon.stub(salesService, 'deleteSale').returns();

      const req = {};
      const res = {};

      req.params = { id: 1 };
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub();

      await salesController.deleteSale(req, res);

      expect(res.status.calledWith(204)).to.be.true;
    });
  });

});