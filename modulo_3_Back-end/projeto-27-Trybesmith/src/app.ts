import express from 'express';
import ProductRouters from './routes/Product.routes';
import UserRouters from './routes/User.routes';
import OrderRouters from './routes/Order.routes';
import LoginRouters from './routes/Login.routes';

const app = express();

app.use(express.json());

app.use('/products', ProductRouters);
app.use('/users', UserRouters);
app.use('/orders', OrderRouters);
app.use('/login', LoginRouters);

export default app;
