const validationData = (data) => {
  if (!data || data === '') {
    return true;
  }
  return false;
};

const watchedAtValidation = (watchedAt) => {
  const dateRegex = /^(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d{2}$/;
  return dateRegex.test(watchedAt);
};

const validationTalkWatchedAt = (req, res, next) => {
  const { talk } = req.body;
  try {
    if (validationData(talk.watchedAt)) {
      throw new Error('O campo "watchedAt" é obrigatório');
    }
    if (!watchedAtValidation(talk.watchedAt)) {
      throw new Error('O campo "watchedAt" deve ter o formato "dd/mm/aaaa"');
    }
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
  next();
};

module.exports = validationTalkWatchedAt;