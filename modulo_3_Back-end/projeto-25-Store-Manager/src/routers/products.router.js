const express = require('express');
const { productsController } = require('../controllers');
const { nameValidate } = require('../middlewares/validateProductMiddleware');

const router = express.Router();

router.get('/', productsController.getProducts);

router.get('/:id', productsController.getProductsById);

router.post('/', nameValidate, productsController.createProducts);

router.put('/:id', nameValidate, productsController.updateProduct);

router.delete('/:id', productsController.deleteProduct);

module.exports = router;