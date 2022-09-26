const { productsModel } = require('../models');

const validateBD = async (req, res, next) => {
  const sales = req.body;
  const products = await Promise.all(sales.map((sale) =>
    productsModel.getById(sale.productId)));

  const result = products.some((product) => product === undefined);
  if (result) return res.status(404).json({ message: 'Product not found' });

  next();
};

const validateQuantity = async (req, res, next) => {
  const sales = req.body;

  const quantity = sales
    .every((sale) => sale.quantity !== undefined && sale.quantity !== null);
  const value = sales.every((sale) => sale.quantity > 0);

  if (!quantity) {
    return res.status(400).json({ message: '"quantity" is required' });
  }

  if (!value) {
    return res.status(422).json({ message: '"quantity" must be greater than or equal to 1' });
  }

  next();
};

const validateProduct = async (req, res, next) => {
  const sales = req.body;

  const product = sales.every((sale) => sale.productId);
  if (!product || product === 0 || product.length === 0) {
    return res.status(400).json({ message: '"productId" is required' });
  }

  next();
};

module.exports = {
  validateProduct,
  validateQuantity,
  validateBD,
};