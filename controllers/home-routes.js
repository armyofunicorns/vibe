const router = require('express').Router();
const sequelize = require('../config/connection');
const { Journal, User, Mood} = require('../models');

// route for login page
router.get('/', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

// route for single journal
router.get('/journal/:id', (req, res) => {
    Journal.findOne({
        where: {
            journalID: req.params.id,
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
            if (!dbJournalData) {
                res.status(404).json({ message: 'No journal found with this id' });
                return;
            }

            // serialize the data
            const journal = dbJournalData.get({ plain: true });

            // pass data to template
            res.render('single-journal', {
                journal,
                loggedIn: req.session.loggedIn
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;