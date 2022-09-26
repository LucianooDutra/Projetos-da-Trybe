const { User } = require('../models');

const getUsersService = () => User.findAll({
  attributes: { exclude: ['password'] },
});

const getByUserEmail = (email) => User.findOne({ where: { email } });

const getByUserIdService = (id) => User.findOne({
  where: { id },
  attributes: { exclude: ['password'] },
});

const createUserService = async (displayName, email, password, image) => {
  await User.create({ displayName, email, password, image });
};

const deleteUserMeService = async (id) => {
  await User.destroy({ where: { id } });
};

module.exports = {
  getByUserEmail,
  createUserService,
  getByUserIdService,
  getUsersService,
  deleteUserMeService,
};