const {
  createCategoriesService,
  getCategoriesService,
} = require('../services/categoriesService');

const createCategories = async (req, res) => {
  try {
    const { name } = req.body;
    const categories = await createCategoriesService(name);
    if (!categories) {
      return res.status(409).json({ message: 'error ao cadastrar usuário' });
    }

    res.status(201).json(categories.dataValues);
  } catch (err) {
    return res.status(500).json({ message: 'Erro interno', error: err.message });
  }
};

const getCategories = async (_req, res) => {
  const categories = await getCategoriesService();
  res.status(200).json(categories);
};

module.exports = {
  createCategories,
  getCategories,
};
