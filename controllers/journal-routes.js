const router = require('express').Router();
const sequelize = require('../config/connection');
const { Journal, User} = require('../models');

const withAuth = require('../utils/auth');

router.get('/:id', withAuth, (req, res) => {
    const journalID = req.params.id;
    Journal.findOne({
        where: {
            journalID: journalID,
        },
        attributes: [
            "journalID",
            "journalNote",
            "userID",
            "moodID",
            "createdAt",
            "date",
            "photoUrl",
        ],
    })
    .then(dbJournalData => {
        console.log(dbJournalData);
        res.render('journal', {
            date: dbJournalData.date,
            journalNote: dbJournalData.journalNote,
            photoUrl: dbJournalData.photoUrl,
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
})

module.exports = router;