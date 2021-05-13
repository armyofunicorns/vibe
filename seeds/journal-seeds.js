const { Journal } = require('../models');

const journalData = [
  {
    journalNote: 'Today was great for me',
    userID: 1,
    moodID: 1,
    date: '2021-05-11'
  },
  {
    journalNote: 'I was not productive today',
    userID: 2,
    moodID: 4,
    date: '2021-05-11'
  },
  {
    journalNote: 'I am so angry with my brother',
    userID: 3,
    moodID: 6,
    date: '2021-05-11'
  }
];

const seedJournal = () => Journal.bulkCreate(journalData);

module.exports = seedJournal;
