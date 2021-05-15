const router = require('express').Router();
const sequelize = require('../config/connection');
const { Journal, User, Answer, Mood} = require('../models');

// import our middleware
const withAuth = require('../utils/auth');

router.get('/', withAuth, (req, res) => {
    Journal.findAll({
        where: {
            // use the ID from the session
            userID: req.session.user_id
        },
        attributes: [
            'journalID',
            'journalNote',
            'userID',
            'moodID',
            'createdAt',
            'updatedAt',
            'date',
            'photoUrl'
        ],
        include: [
            {
                model: Mood,
                attributes: ['moodID', 'title', 'color'],
            },
            {
                model: User,
                attributes: ['userName']
            }
        ]
    })
        .then(dbJournalData => {
            //serialize data before passing to template
            const journals = dbJournalData.map(journal => journal.get({plain: true}));
            res.render('dashboard', {journals, loggedIn: true});
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;