const { salesModel } = require('../models');

const createSales = async (sales) => {
  const saleId = await salesModel.createSales();
  const result = await salesModel.insertSales(sales, saleId);

  const erro = { status: 404, message: 'Sales not created' };

  if (!result.id || result.length === 0) throw erro;

  // console.log(result);
  return result;
};

const getSales = async () => {
  const sales = await salesModel.getSales();

  return sales;
};

const getSalesById = async (id) => {
  const sale = await salesModel.getSalesById(id);

  const erro = { status: 404, message: 'Sale not found' };

  if (!sale || sale.length === 0) throw erro;

  return sale;
};

const deleteSale = async (id) => {
  await getSalesById(id);

  await salesModel.deleteSale(id);
};

module.exports = {
  createSales,
  getSales,
  getSalesById,
  deleteSale,
};