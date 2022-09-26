const { productsService } = require('../services');

const getProducts = async (_req, res) => {
  try {
    const products = await productsService.getProducts();
    res.status(200).json(products);
  } catch (e) {
    console.log('Erro getProducts: ', e.message);
  }
};

const getProductsById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await productsService.getById(id);
    res.status(200).json(product);
  } catch (e) {
    console.log('Erro getById: ', e.message);
    res.status(404).json(e);
    next(e);
  }
};

const createProducts = async (req, res) => {
  try {
    const { name } = req.body;
    const product = await productsService.createProducts(name);
    res.status(201).json(product);
  } catch (e) {
    console.log('Erro createProducts: ', e.message);
    res.status(404).json(e);
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const product = await productsService.updateProduct(name, id);
    res.status(200).json(product);
  } catch (e) {
    console.log('Erro updateProduct: ', e.message);
    res.status(404).json(e);
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    await productsService.deleteProduct(id);
    res.status(204).end();
  } catch (e) {
    console.log('Erro deleteProduct: ', e.message);
    res.status(404).json(e);
  }
};

module.exports = {
  getProducts,
  getProductsById,
  createProducts,
  updateProduct,
  deleteProduct,
};