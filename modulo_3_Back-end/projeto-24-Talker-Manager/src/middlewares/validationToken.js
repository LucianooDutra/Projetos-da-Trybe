const validationData = (authorization) => {
  if (!authorization || authorization === '') {
    return true;
  }
  return false;
};

const validationToken = (req, res, next) => {
  const { authorization } = req.headers;
  try {
    if (validationData(authorization)) throw new Error('Token não encontrado');
    if (authorization.length !== 16 && typeof authorization === 'string') {
      throw new Error('Token inválido');
    }
  } catch (err) {
    return res.status(401).json({ message: err.message });
  }
  next();
};

module.exports = validationToken;