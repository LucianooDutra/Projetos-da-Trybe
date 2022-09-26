const emailRegex = (email) => {
  const regex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
  return regex.test(email);
};

const validationEmail = (req, res, next) => {
  const { email } = req.body;

  try {
    if (!email || email === '') throw new Error('O campo "email" é obrigatório');
    if (!emailRegex(email)) throw new Error('O "email" deve ter o formato "email@email.com"');
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }

  next();
};

module.exports = validationEmail;