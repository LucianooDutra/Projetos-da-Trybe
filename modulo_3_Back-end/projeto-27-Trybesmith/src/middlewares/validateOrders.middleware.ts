import { NextFunction, Request, Response } from 'express';

function validationProductsIds(req: Request, res: Response, next: NextFunction) {
  const product = req.body;

  if (!product.productsIds) {
    return res.status(400).json({ message: '"productsIds" is required' });
  }

  if (!Array.isArray(product.productsIds)) {
    return res.status(422).json({ message: '"productsIds" must be an array' });
  }

  if (product.productsIds.length === 0) {
    return res.status(422).json({ message: '"productsIds" must include only numbers' });
  }

  next();
}

export default validationProductsIds;