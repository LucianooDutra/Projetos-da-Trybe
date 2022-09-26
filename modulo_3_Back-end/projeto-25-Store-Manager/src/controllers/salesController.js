const { salesService } = require('../services');

const createSales = async (req, res) => {
  try {
    const sales = req.body;
    const result = await salesService.createSales(sales);
    res.status(201).json(result);
  } catch (e) {
    console.log('Erro createSales: ', e.message);
    res.status(404).json(e);
  }
};

const getSales = async (_req, res) => {
  try {
    const sales = await salesService.getSales();
    res.status(200).json(sales);
  } catch (e) {
    console.log('Erro getSales: ', e.message);
  }
};

const getSalesById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const sale = await salesService.getSalesById(id);
    res.status(200).json(sale);
  } catch (e) {
    console.log('Erro getSalesById: ', e.message);
    res.status(404).json(e);
    next(e);
  }
};

const deleteSale = async (req, res) => {
  try {
    const { id } = req.params;
    await salesService.deleteSale(id);
    res.status(204).end();
  } catch (e) {
    console.log('Erro deleteSale: ', e.message);
    res.status(404).json(e);
  }
};

module.exports = {
  createSales,
  getSales,
  getSalesById,
  deleteSale,
};