const { productsModel } = require('../models');

const getProducts = async () => {
  const products = await productsModel.getProducts();

  return products;
};

const getById = async (id) => {
  const product = await productsModel.getById(id);

  const erro = { status: 404, message: 'Product not found' };

  if (!product || product.length === 0) throw erro;

  return product;
};

const createProducts = async (name) => {
  const product = await productsModel.createProducts(name);

  const erro = { status: 404, message: 'Product not created' };

  if (!product || product.length === 0) throw erro;

  return product;
};

const updateProduct = async (name, id) => {
  await getById(id);

  const update = await productsModel.updateProduct(name, id);

  const erro = { status: 404, message: 'error when updating the product' };

  if (!update || update.length === 0) throw erro;

  return update;
};

const deleteProduct = async (id) => {
  await getById(id);

  await productsModel.deleteProduct(id);
};

module.exports = {
  getProducts,
  getById,
  createProducts,
  updateProduct,
  deleteProduct,
};