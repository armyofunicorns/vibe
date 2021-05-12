const router = require('express').Router();
const { Question } = require('../../models');
const sequelize = require('../../config/connection');

router.get('/', (req, res) => {
    Question.findAll({
        attributes: [
            'questionID',
            'questionText',
        ]
    })
    .then(dbQuestionData => res.json(dbQuestionData))
    .catch(err => {
        console.log(err);
        res.status(500).json({message: 'Failed to retrieve questions'});
    });
});

router.get('/:id', (req, res) => {
    Question.findOne({
        where: {
            questionID: req.params.id
        },
        attributes: [
            'questionID',
            'questionText'
        ]
    })
    .then(dbQuestionData => {
        if (!dbQuestionData) {
            res.status(404).json({message: 'No question found with this id!'});
            return;
        }
        res.json(dbQuestionData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({message: 'Failed to find a question!'})
    })
})
module.exports = router;