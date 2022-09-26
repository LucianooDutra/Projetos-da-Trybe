const chai = require('chai');
const sinon = require('sinon');

const { expect } = chai;

const { salesModel } = require('../../../src/models');
const connection = require('../../../src/models/connection');


describe('Verificando sales models', function () {

  afterEach(sinon.restore);

  describe('criando nova sales', function () {

    afterEach(sinon.restore);

    it('sales criado com dados validos, funçôes createSales', async function () {

      const resultado = { insertId: 1 };

      sinon.stub(connection, 'execute').resolves([resultado]);

      const result = await salesModel.createSales();

      expect(result).to.deep.equal(resultado.insertId);
    });

    // it('sales criado com dados validos, funçôes insertSales', async function () {

    //   const resultado = { saleId: 14, productId: 1, quantity: 2 };
      
    //   const data = {
    //     sales: [{ saleId: 14, productId: 1, quantity: 2 }],
    //     insertId: 1,
    //   };

    //   sinon.stub(connection, 'execute').resolves([resultado]);

    //   const result = await salesModel.insertSales(data);

    //   console.log(result);

    //   expect(result).to.deep.equal(data);
    // });
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
      sinon.stub(connection, 'execute').resolves([sales]);
    });

    afterEach(sinon.restore);

    it('é chamado o json com a lista de sales', async function () {

      const result = await salesModel.getSales();
      // console.log(result);

      expect(result).to.deep.equal(sales);
    });
  });

  describe('buscando produto pelo id', function () {

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
      sinon.stub(connection, "execute").resolves([sales]);
    });

    afterEach(sinon.restore);

    it('é chamado o json com os sales do id correspondente', async function () {

      const result = await salesModel.getSalesById(1);

      expect(result).to.deep.equal(sales);
    });
  });

  describe('buscando sale pelo id, em caso de error', function () {

    afterEach(sinon.restore);

    it('é chamado o json vazio com o id que não existe', async function () {

      sinon.stub(connection, "execute").resolves([]);

      const result = await salesModel.getSalesById(999);

      expect(result).to.deep.equal();
    });

    it('é chamado o json com Sale not found', async function () {

      const saleNotFound = {
        status: 404,
        message: 'Sale not found',
      };

      sinon.stub(salesModel, 'getSalesById').resolves(saleNotFound.message);

      const result = await salesModel.getSalesById(999);

      expect(result).to.deep.equal('Sale not found');
    });
  });
});
