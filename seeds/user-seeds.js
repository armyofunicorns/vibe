const { User } = require('../models');

const userData = [
  {
    userName: 'RonaldFir',
    password: '123456'
  },
  {
    userName: 'VirginiaWoolf',
    password: '123456'
  },
  {
    userName: 'CharlesLeRoi',
    password: '123456'
  },
  {
    userName: 'Fiddleberry',
    password: '123456'
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
