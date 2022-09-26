const express = require('express');
const { salesController } = require('../controllers');
const {
  validateProduct,
  validateQuantity,
  validateBD,
} = require('../middlewares/validateSaleMiddleware');

const salesRouter = express.Router();

salesRouter.get('/', salesController.getSales);

salesRouter.get('/:id', salesController.getSalesById);

salesRouter.post(
  '/',
  validateProduct,
  validateQuantity,
  validateBD,
  salesController.createSales,
);

salesRouter.delete('/:id', salesController.deleteSale);

module.exports = salesRouter;
