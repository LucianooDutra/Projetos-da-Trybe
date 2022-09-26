const express = require('express');
const { categoriesController } = require('../controllers');
const { nameCategoriesValidate } = require('../middlewares/validateUserMiddleware');
const validateJWT = require('../auth/validateJWT');

const categoriesRouter = express.Router();

categoriesRouter.post('/',
validateJWT,
nameCategoriesValidate,
categoriesController.createCategories);

categoriesRouter.get('/', validateJWT, categoriesController.getCategories);

// categoriesRouter.get('/:id', validateJWT, categoriesController.getUsersById);

module.exports = categoriesRouter;