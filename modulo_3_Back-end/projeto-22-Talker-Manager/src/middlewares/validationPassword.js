const validationPassword = (req, res, next) => {
  const { password } = req.body;

  try {
    if (!password || password === '') throw new Error('O campo "password" é obrigatório');
    if (password.length < 6) throw new Error('O "password" deve ter pelo menos 6 caracteres');
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }

  next();
};

module.exports = validationPassword;