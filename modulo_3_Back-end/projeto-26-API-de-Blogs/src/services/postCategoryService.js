const { PostCategory } = require('../models');

const createPostCategory = async (postId, categoryId) => {
  await PostCategory.create({
    postId,
    categoryId,
  });
};

module.exports = {
  createPostCategory,
};