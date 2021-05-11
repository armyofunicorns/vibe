const { Answer } = require('../models');

const answerData = [
  {
    answerText: 'I talked to one of my school friends.',
    questionID: 1,
    userID: 1
  },
  {
    answerText: 'I was able to exercise today.',
    questionID: 2,
    userID: 2
  },
  {
    answerText: 'I could finish my work today!',
    questionID: 1,
    userID: 3
  }
];

const seedAnswer = () => Answer.bulkCreate(answerData);

module.exports = seedAnswer;
