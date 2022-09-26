require('dotenv/config');
const {
  createPostService,
  getPostsService,
  getPostByIdService,
  updatePostByIdService,
  deletePostByIdService,
  getPostBySearchService,
} = require('../services/postService');
const { getCategoryById } = require('../services/categoriesService');
const { createPostCategory } = require('../services/postCategoryService');

const error = async (err, res) => {
  const Error = res.status(500).json({ message: 'Erro interno', error: err.message });
  return Error;
};

const createPostAndCategory = async (categoryIds, createdPost) => {
  await Promise.all(categoryIds.map(async (categoryId) => {
    await createPostCategory(createdPost.id, categoryId);
  }));
};

const createPost = async (req, res) => {
  try {
    const { title, content, categoryIds } = req.body;
    const userId = req.user.dataValues.id;
    const category = await getCategoryById(categoryIds);
    if (category.some((Category) => Category === null)) {
      return res.status(400).json({ message: '"categoryIds" not found' });
    }
    const createdPost = await createPostService(title, content, userId);
    if (!createdPost) {
      return res.status(409).json({ message: 'error ao cadastrar usuário' });
    }
    await createPostAndCategory(categoryIds, createdPost);
    res.status(201).json(createdPost);
  } catch (err) {
    return error(err, res);
  }
};

const getPosts = async (_req, res) => {
  try {
    const posts = await getPostsService();
    // console.log(posts);
    res.status(200).json(posts);
  } catch (err) {
    return error(err, res);
  }
};

const getPostById = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await getPostByIdService(id);
    // console.log(post);
    if (!post || post.length === 0) {
      return res.status(404).json({ message: 'Post does not exist' });
    }
    res.status(200).json(post);
  } catch (err) {
    return error(err, res);
  }
};

const updatePostById = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;
    const userId = req.user.dataValues.id;
    const post = await getPostByIdService(id);
    if (post.userId !== userId) {
      return res.status(401).json({ message: 'Unauthorized user' });
    }
    const updatedPost = await updatePostByIdService(id, title, content);
    res.status(200).json(updatedPost);
  } catch (err) {
    return error(err, res);
  }
};

const deletePostById = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.dataValues.id;
    const post = await getPostByIdService(id);
    if (!post || post.length === 0) {
      return res.status(404).json({ message: 'Post does not exist' });
    }
    if (post.userId !== userId) {
      return res.status(401).json({ message: 'Unauthorized user' });
    }
    await deletePostByIdService(id);
    res.status(204).end();
  } catch (err) {
    return error(err, res);
  }
};

const getPostBySearch = async (req, res) => {
  try {
    const { q } = req.query;
    // console.log(req.query)
    const post = await getPostBySearchService(q);
    if (!post || post.length === 0) {
      return res.status(200).json([]);
    }
    res.status(200).json(post);
  } catch (err) {
    return error(err, res);
  }
};

module.exports = {
  createPost,
  getPosts,
  getPostById,
  updatePostById,
  deletePostById,
  getPostBySearch,
};