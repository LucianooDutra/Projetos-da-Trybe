const chai = require('chai');
const sinon = require('sinon');

const { expect } = chai;

const { salesService } = require('../../../src/services');
const { salesModel } = require('../../../src/models');

describe('Verificando sales services', function () {

  afterEach(sinon.restore);

  describe('criando nova sales', function () {

    afterEach(sinon.restore);

    it('sales criado com dados validos, funçôes createSales e insertSales', async function () {

      const resultado = { insertId: 10 };

      const data = [
        { productId: 3, quantity: 3 },
        { productId: 2, quantity: 2 },
        { productId: 1, quantity: 1 },
      ];

      const result = {
        id: 10,
        itemsSold: [
          { productId: 3, quantity: 3 },
          { productId: 2, quantity: 2 },
          { productId: 1, quantity: 1 },
        ]
      };

      sinon.stub(salesModel, 'createSales').resolves(resultado);
      sinon.stub(salesModel, 'insertSales').resolves(result);

      const results = await salesService.createSales(data);

      expect(results).to.deep.equal(result);
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
      sinon.stub(salesModel, 'getSales').resolves(sales);
    });

    afterEach(sinon.restore);

    it('é chamado o json com a lista de produtos', async function () {

      const result = await salesService.getSales();

      expect(result).to.deep.equal(sales);
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
      sinon.stub(salesModel, 'getSalesById').resolves(sales);
    });

    afterEach(sinon.restore);

    it('é chamado o json com os sales do id correspondente', async function () {

      const result = await salesService.getSalesById(1);

      expect(result).to.deep.equal(sales);
    });
  });

  describe('buscando sale pelo id, em caso de error', function () {

    afterEach(sinon.restore);

    it('é chamado o json com Sale not found', async function () {

      const salesNotFound = {
        status: 404,
        message: 'Sale not found',
      };

      sinon.stub(salesModel, 'getSalesById').resolves(salesNotFound.message);

      const result = await salesService.getSalesById(999);

      expect(result).to.deep.equal('Sale not found');
    });
  });
});