require('dotenv/config');
const jwt = require('jsonwebtoken');
const {
  getByUserEmail,
  createUserService,
  getUsersService,
  getByUserIdService,
  deleteUserMeService,
} = require('../services/userService');
const { errorGenerate } = require('../utils/genericErrorHandler');

const secret = process.env.JWT_SECRET;

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const createUser = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;
    const user = await getByUserEmail(email);
    if (user) {
      return res.status(409).json({ message: 'User already registered' });
    }
    await createUserService(displayName, email, password, image);

    const payload = {
      displayName,
      email,
    };
    const token = jwt.sign(payload, secret, jwtConfig);
    res.status(201).json({ token });
  } catch (err) {
    throw errorGenerate(500, { message: 'Erro interno', error: err.message });
  }
};

const getUsers = async (req, res) => {
  // console.log(req.user.dataValues);
  const users = await getUsersService();
  res.status(200).json(users);
};

const getUsersById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await getByUserIdService(id);
    if (!user) {
      return res.status(404).json({ message: 'User does not exist' });
    }
    res.status(200).json(user);
  } catch (err) {
    throw errorGenerate(500, { message: 'Erro interno', error: err.message });
  }
};

const deleteUserMe = async (req, res) => {
  try {
    const userId = req.user.dataValues.id;
    await deleteUserMeService(userId);
    res.status(204).end();
  } catch (err) {
    throw errorGenerate(500, { message: 'Erro interno', error: err.message });
  }
};

module.exports = {
  createUser,
  getUsers,
  getUsersById,
  deleteUserMe,
};