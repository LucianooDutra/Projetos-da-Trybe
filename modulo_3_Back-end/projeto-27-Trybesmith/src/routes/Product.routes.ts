import { Router } from 'express';
import ProductController from '../controllers/ProductController';
import { validationName, validationAmount } from '../middlewares/validateProduct.middlewares';

const router = Router();

const productController = new ProductController();

router.get('/', productController.getAll);
router.post('/', validationName, validationAmount, productController.create);

export default router;