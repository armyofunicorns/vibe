const router = require('express').Router();
const { Answer } = require('../../models');
const sequelize = require('../../config/connection');
const withAuth = require('../../utils/auth');
const { findOne } = require('../../models/Mood');

router.post('/', withAuth, (req, res) => {
    Answer.create({
        questionID: req.body.questionID,
        answerText: req.body.answerText,
        userID: req.session.user_id,
        date: req.body.date
    })
    .then(dbAnswerData => res.json(dbAnswerData))
    .catch(err => {
        console.log(err);
        res.status(500).json({ message: 'Failed to post an answer'});
    });
});

router.get('/', withAuth, (req, res) => {
    Answer.findAll({
        where: {
            userID: req.session.user_id
        },
        attributes: [
            'answerText',
            'questionID',
            'userID',
            'date'
        ],
        order: [['createdAt', 'ASC']]
    })
    .then(dbAnswerData => res.json(dbAnswerData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/:date', withAuth, (req, res) => {
    Answer.findOne({
        where: {
            date: req.params.date,
            userID: req.session.user_id
        },
        attributes: [
            'answerText',
            'questionID',
            'userID',
            'date'
        ]
    })
    .then(dbAnswerData => {
        if (!dbAnswerData) {
            res.status(404).json({ message: 'No data found for this date'});
            return;
        }
        res.json(dbAnswerData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({message: 'Failed to find an answer'});
    });
});

module.exports = router;