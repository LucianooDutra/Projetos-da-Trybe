import { Router } from 'express';
import OrderController from '../controllers/OrderController';
import validationJWT from '../middlewares/auth.middleware';
import validationProductsIds from '../middlewares/validateOrders.middleware'

const router = Router();

const orderController = new OrderController();

router.get('/', orderController.getAll);
router.post('/', validationProductsIds, validationJWT, orderController.create);

export default router;