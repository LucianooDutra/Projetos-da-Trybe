const connection = require('./connection');

const getProducts = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM products ORDER BY id',
  );
  return result;
};

const getById = async (id) => {
  const [result] = await connection.execute(
    'SELECT * FROM products WHERE id = ?',
    [id],
  );
  return result[0];
};

const createProducts = async (name) => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO products (name) VALUE  (?)',
    [name],
  );
  const productNew = { id: insertId, name };
  return productNew;
};

const updateProduct = async (name, id) => {
  await connection.execute('UPDATE products SET name=? WHERE id=?', [name, id]);

  return { id, name };
};

const deleteProduct = async (id) => {
  await connection.execute('DELETE FROM products WHERE id=?', [id]);
};

module.exports = {
  getProducts,
  getById,
  createProducts,
  updateProduct,
  deleteProduct,
};