const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Answer, Question} = require('../models');

// import our middleware
const withAuth = require('../utils/auth');

router.get('/', withAuth, (req, res) => {
    Answer.findAll({
        where: {
            // use the ID from the session
            userID: req.session.user_id
        },
        attributes: [
            'answerText',
            'questionID',
            'userID',
            'date'
        ],
        order: [['createdAt', 'ASC']],
        include: [
            {
                model: Question,
                attributes: ['questionText'],
            },
            {
                model: User,
                attributes: ['userName']
            }
        ]
    })
        .then(dbAnswerData => {
            //serialize data before passing to template
            const answers = dbAnswerData.map(answer => answer.get({plain: true}));
            res.render('answers', {answers, loggedIn: true});
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;