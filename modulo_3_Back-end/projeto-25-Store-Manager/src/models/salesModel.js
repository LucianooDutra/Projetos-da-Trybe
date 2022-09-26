const connection = require('./connection');

const createSales = async () => {
  const [{ insertId }] = await connection.execute('INSERT INTO sales (date) VALUE (NOW())');
  return insertId;
};

const insertSales = async (sales, newSaleId) => {
  await Promise.all(sales.map(async (sale) => {
    await connection.execute(
      'INSERT INTO sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?)',
      [newSaleId, sale.productId, sale.quantity],
    );
  }));

  const newSale = {
    id: newSaleId,
    itemsSold: sales,
  };

  return newSale;
};

const getSales = async () => {
  const [result] = await connection.execute(
    `SELECT sp.sale_id AS saleId,
      sa.date,
      sp.product_id AS productId,
      sp.quantity
      FROM sales_products AS sp
      JOIN sales AS sa
      ON sp.sale_id = sa.id
      ORDER BY sa.id ASC, sp.product_id ASC;`,
  );
  return result;
};

const getSalesById = async (id) => {
  const [result] = await connection.execute(
    `SELECT sa.date,
      sp.product_id AS productId,
      sp.quantity
      FROM sales_products AS sp 
      LEFT JOIN sales AS sa
      ON sp.sale_id = sa.id
      WHERE sp.sale_id = ?
      ORDER BY sa.id ASC, sp.product_id ASC;`,
    [id],
  );
  // console.log(result);
  return result;
};

const deleteSale = async (id) => {
  await connection.execute('DELETE FROM sales WHERE id=?', [id]);
};

module.exports = {
  createSales,
  insertSales,
  getSales,
  getSalesById,
  deleteSale,
};