const validationData = (data) => {
  if (!data || data === '') {
    return true;
  }
  return false;
};

const validationTalk = (req, res, next) => {
  const { talk } = req.body;
  try {
    if (validationData(talk)) throw new Error('O campo "talk" é obrigatório');
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
  next();
};

module.exports = validationTalk;