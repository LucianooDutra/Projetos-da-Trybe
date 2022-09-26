const titleValidate = (req, res, next) => {
  const { title } = req.body;
  if (!title) {
    return res.status(400)
    .json({ message: 'Some required fields are missing' });
  }
  next();
};

const contentValidate = (req, res, next) => {
  const { content } = req.body;
  if (!content) {
    return res.status(400)
    .json({ message: 'Some required fields are missing' });
  }
  next();
};

const categoryIdValidate = (req, res, next) => {
  const { categoryIds } = req.body;

  if (!categoryIds) {
    return res.status(400)
    .json({ message: 'Some required fields are missing' });
  }
  next();
};

module.exports = {
  titleValidate,
  contentValidate,
  categoryIdValidate,
};