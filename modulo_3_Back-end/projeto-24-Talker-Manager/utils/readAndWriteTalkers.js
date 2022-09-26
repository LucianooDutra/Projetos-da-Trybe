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

const getTalkers = async () => {
const arrayData = await readData();
// console.log(arrayData);
return arrayData;
};

const getTalkerId = async (id) => {
  const talkers = await getTalkers();
  // console.log(talkers);
  // console.log(`id: ${id}`);
  const talker = talkers.find((t) => t.id === parseInt(id, 10));
  // console.log(`result: ${talker}`)
  return talker;
};

const writeTalker = async (talkerRequest) => {
  const talkers = await getTalkers();
  const newId = { id: talkers.length + 1 };
  const newTalker = Object.assign(newId, talkerRequest);
  talkers.push(newTalker);
  const newTalkers = JSON.stringify(talkers);

  try {
    fs.writeFile(data, newTalkers);
  } catch (err) {
    return ({ message: err.message });
  }

  return newTalker;
};

const updateTalker = async (talkerRequest, id) => {
try {
const talkers = await getTalkers();
let changedTalker;
for (let i = 0; i < talkers.length; i += 1) {
if (talkers[i].id === Number(id)) {
talkers[i].name = talkerRequest.name;
talkers[i].age = talkerRequest.age;
talkers[i].talk = talkerRequest.talk;
talkers[i].talk.watchedAt = talkerRequest.talk.watchedAt;
talkers[i].talk.rate = talkerRequest.talk.rate;
changedTalker = talkers[i];
}
}
await fs.writeFile(data, JSON.stringify(talkers));
return changedTalker;
} catch (error) {
return null;
}
};

const deleteTalker = async (id) => {
  const talkers = await getTalkers();
  const delTalkers = talkers.filter((talker) => talker.id !== Number(id));
  try {
    fs.writeFile(data, JSON.stringify(delTalkers));
  } catch (err) {
    return ({ message: err.message });
  }
};

const getTalkerByName = async (q) => {
  const talkers = await getTalkers();

  if (q === '' || !q) {
    // console.log('1° if')
    // console.log(q);
    return talkers;
  }

  const getTalker = talkers.filter((talker) => talker.name.includes(q));
  console.log(getTalker);
  if (!getTalker) {
    // console.log('2° if')
    return [];
  }
  // console.log('return')
  return getTalker;
};

module.exports = {
  getTalkers,
  getTalkerId,
  writeTalker,
  updateTalker,
  deleteTalker,
  getTalkerByName,
};