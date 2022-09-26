const validationAge = (req, res, next) => {
  const { age } = req.body;

  try {
    if (!age || age === '') throw new Error('O campo "age" é obrigatório');
    if (age < 18) throw new Error('A pessoa palestrante deve ser maior de idade');
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }

  next();
};

module.exports = validationAge;