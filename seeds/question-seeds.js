const { Question } = require('../models');

const questionData = [
  {
    questionText: 'What was your favorite thing about today?',
  },
  {
    questionText: 'What do you value most about today?',
  },
  {
    questionText: 'tomorrow, what can you adjust your behavior and perspective to be more aligned with the person you want to be?',
  },
  {
    questionText: 'What inner quality would you like to focus on more?',
  },
  {
    questionText: 'How can you take care of yourself more?',
  },
  {
    questionText: 'What are you struggling with, that you want to shift or heal?',
  },
  {
    questionText: 'Who inspires you? Why do they inspire you?',
  },
  {
    questionText: 'I am grateful for...',
  },
  {
    questionText: 'What does your ideal day look like?',
  },
  {
    questionText: 'What are you most proud of?',
  },
  {
    questionText: 'What is one important lesson you learned this day/week/month?',
  },
  {
    questionText: 'What would I tell my past self?',
  },
  {
    questionText: 'What would I tell future me?',
  },
  {
    questionText: 'Give yourself a compliment',
  },
  {
    questionText: 'what is your favorite personality trait?',
  },
  {
    questionText: 'What is your best accomplishment?',
  },
  {
    questionText: 'When do you feel most confident?',
  },
  {
    questionText: 'What is your proudest moment?',
  },
  {
    questionText: 'What do you need to make more time for in your life?',
  },
  {
    questionText: 'What have you done for yourself lately?',
  },
  {
    questionText: 'What made you smile today?',
  },
  {
    questionText: 'What are you learning about yourself?',
  },
  {
    questionText: 'What skill are you thankful for?',
  },
];

const seedQuestion = () => Question.bulkCreate(questionData);

module.exports = seedQuestion;
