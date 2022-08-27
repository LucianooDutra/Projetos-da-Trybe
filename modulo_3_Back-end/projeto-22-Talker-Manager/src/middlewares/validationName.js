const validationName = (req, res, next) => {
  const { name } = req.body;

  try {
    if (!name || name === '') throw new Error('O campo "name" é obrigatório');
    if (name.length < 3) throw new Error('O "name" deve ter pelo menos 3 caracteres');
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }

  next();
};

module.exports = validationName;