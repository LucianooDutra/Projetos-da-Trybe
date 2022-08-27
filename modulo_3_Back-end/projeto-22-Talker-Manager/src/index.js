const express = require('express');
const bodyParser = require('body-parser');
const crypto = require('crypto');

const {
  getTalkers,
  getTalkerId,
  writeTalker,
  updateTalker,
  deleteTalker,
  getTalkerByName,
} = require('../utils/readAndWriteTalkers');
const existingId = require('./middlewares/existingId');
const validationEmail = require('./middlewares/validationEmail');
const validationPassword = require('./middlewares/validationPassword');
const validationToken = require('./middlewares/validationToken');
const validationName = require('./middlewares/validationName');
const validationAge = require('./middlewares/validationAge');
const validationTalk = require('./middlewares/validationTalk');
const validationTalkWatchedAt = require('./middlewares/validationTalkWatchedAt');
const validationTalkRate = require('./middlewares/validationTalkRate');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

// 8° requisito
app.get('/talker/search', validationToken, async (req, res) => {
  const { q } = req.query;

  const talker = await getTalkerByName(q);

  return res.status(200).json(talker);
});

// 1° requisito
app.get('/talker', async (req, res) => {
  const talkers = await getTalkers();
  return res.status(200).json(talkers);
});

// 2° requisito
app.get('/talker/:id', existingId, async (req, res) => {
  const { id } = req.params;
  const talker = await getTalkerId(id);
  res.status(200).json(talker);
});

// 3° e 4° requisitos
app.post('/login', validationEmail, validationPassword, async (req, res) => {
  const number = await crypto.randomBytes(8).toString('hex');
  // console.log(number)
  res.status(200).json({ token: `${number}` });
});

// 5° requisito
app.post('/talker',
validationToken,
validationName,
validationAge,
validationTalk,
validationTalkWatchedAt,
validationTalkRate,
async (req, res) => {
  const talkerRequest = req.body;

  const newWriteTalker = await writeTalker(talkerRequest);

  return res.status(201).json(newWriteTalker);
});

// 6° requisito
app.put('/talker/:id',
validationToken,
validationName,
validationAge,
validationTalk,
validationTalkWatchedAt,
validationTalkRate,
async (req, res) => {
  const { id } = req.params;
  const talkerRequest = req.body;

  const newTalker = await updateTalker(talkerRequest, id);

  return res.status(200).json(newTalker);
});

// 7° requisito
app.delete('/talker/:id', validationToken, async (req, res) => {
  const { id } = req.params;

  await deleteTalker(id);

  res.sendStatus(204);
});

// subir porta
app.listen(PORT, () => {
  console.log('Online');
});

// inicio de projeto!