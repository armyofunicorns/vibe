const router = require('express').Router();
const sequelize = require('../config/connection');
const { Journal, User, Mood} = require('../models');

// import our middleware
const withAuth = require('../utils/auth');

router.get('/', withAuth, (req, res) => {
// router.get('/', (req, res) => {
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
            }
        ]
    })
        .then(dbJournalData => {
            //serialize data before passing to template
            const journals = dbJournalData.map(journal => journal.get({plain: true}));
            User.findOne({
                where: {
                    userId: req.session.user_id,
                },
                attributes: [
                    'userName',
                ]
             })
             .then((userData) => {
                res.render('dashboard', {journals, loggedIn: true, username: userData.userName});
             });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;