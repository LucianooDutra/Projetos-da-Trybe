const { Op } = require('sequelize');
const { BlogPost, User, Category } = require('../models');

const createPostService = async (title, content, userId) => {
  const post = await BlogPost.create({
    title,
    content,
    userId,
    updated: new Date(),
    published: new Date(),
  });
  return post;
};

const getPostsService = async () => {
  const posts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  return posts;
};

const getPostByIdService = async (id) => {
  const post = await BlogPost.findOne({
    where: { id },
    attributes: { exclude: ['user_id'] },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  return post;
};

const updatePostByIdService = async (id, title, content) => {
  await BlogPost.update({ title, content }, { where: { id } });
  const post = await BlogPost.findOne({
    where: { id },
    attributes: { exclude: ['user_id'] },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  return post;
};

const deletePostByIdService = async (id) => {
  await BlogPost.destroy({ where: { id } });
};

const getPostBySearchService = async (q) => {
  const post = await BlogPost.findAll({
    where: { [Op.or]: [
        { title: { [Op.like]: `%${q}%` } },
        { content: { [Op.like]: `%${q}%` } },
      ],
    },
    attributes: { exclude: ['user_id'] },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  return post;
};

module.exports = {
  createPostService,
  getPostsService,
  getPostByIdService,
  updatePostByIdService,
  deletePostByIdService,
  getPostBySearchService,
};