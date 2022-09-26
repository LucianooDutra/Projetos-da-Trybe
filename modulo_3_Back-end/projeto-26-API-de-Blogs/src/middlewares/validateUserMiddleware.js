const nameValidate = (req, res, next) => {
  const { displayName } = req.body;
  if (displayName.length < 8) {
    return res.status(400)
    .json({ message: '"displayName" length must be at least 8 characters long' });
  }
  next();
};

const emailValidate = (req, res, next) => {
  const { email } = req.body;

  const testEmail = /\S+@\S+\.\S+/;

  if (!testEmail.test(email)) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }
  next();
};

const passwordValidate = (req, res, next) => {
  const { password } = req.body;

  if (password.length < 6) {
    return res.status(400)
    .json({ message: '"password" length must be at least 6 characters long' });
  }
  next();
};

const nameCategoriesValidate = (req, res, next) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400)
    .json({ message: '"name" is required' });
  }
  next();
};

module.exports = {
  nameValidate,
  emailValidate,
  passwordValidate,
  nameCategoriesValidate,
};