const { Category } = require('../models');

const createCategoriesService = async (name) => {
  const category = await Category.create({ name });
  return category;
};

const getCategoriesService = async () => Category.findAll();

const getCategoryById = async (categoryIds) => {
  const categories = await Promise.all(
    categoryIds.map(async (categoryId) => {
      const categoryExist = await Category.findOne({ where: { id: categoryId } });
      return categoryExist;
    }),
  );
  return categories;
};

module.exports = {
  createCategoriesService,
  getCategoriesService,
  getCategoryById,
};