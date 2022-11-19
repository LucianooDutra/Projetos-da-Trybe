import express from 'express';
import carRoutes from './Routes/car.Routes';
import motorcycleRoutes from './Routes/motorcycles.Routes';
// import ErrorHandler from './Middlewares/ErrorHandler';

const app = express();
app.use(express.json());

app.use(carRoutes);
app.use(motorcycleRoutes);
// app.use(ErrorHandler.handle);

export default app;
