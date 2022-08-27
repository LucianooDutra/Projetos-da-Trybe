const validationData = (data) => {
  if (!data && typeof data !== 'number') {
    return true;
  }
  return false;
};

const rateValidation = (rate) => ([1, 2, 3, 4, 5].includes(Number(rate)));

const validationTalkRate = (req, res, next) => {
  const { talk } = req.body;
  try {
    if (validationData(talk.rate)) throw new Error('O campo "rate" é obrigatório');
    if (!rateValidation(talk.rate)) {
      throw new Error('O campo "rate" deve ser um inteiro de 1 à 5');
    }
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
  next();
};

module.exports = validationTalkRate;