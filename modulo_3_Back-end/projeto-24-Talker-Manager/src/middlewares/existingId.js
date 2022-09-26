const fs = require('fs/promises');

const data = 'src/talker.json';

const readData = async () => {
try {
const arrayPosts = await fs.readFile(data, 'utf8');

return JSON.parse(arrayPosts);
} catch (error) {
return null;
}
};

const existingId = async (req, res, next) => {
  const arrayData = await readData();
  // console.log(arrayData);
  const id = Number(req.params.id);
  const talker = arrayData.find((t) => t.id === id);
  // console.log(talker);

  if (talker) {
    // se existe, a requisição segue para o próximo middleware
    return next();
  } 
    // se não existe, então vamos retornar o status HTTP 404
    // return res.sendStatus(404);
    return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
};

module.exports = existingId;