const router = require('express').Router();
const {Journal, User, Mood} = require('../../models');
const sequelize = require('../../config/connection');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, (req, res) => {
    Journal.create({
        journalNote: req.body.journalNote,
        userID: req.session.user_id,
        moodID: req.body.moodID
    })
    .then(dbJournalData => res.json(dbJournalData))
    .catch(err => {
        console.log(err);
        res.status(500).json({message: 'Failed to create a journal note!'});
    });
});

router.put('/:id', withAuth, (req, res) => {
    Journal.update(
        {
            journalNote: req.body.journalNote
        },
        {
            where: {
                journalID: req.params.id,
                userID: req.session.user_id
            }
        }
    )
    .then(dbJournalData => {
        if (dbJournalData[0] === 0) {
            res.status(404).json({ message: 'No journal entry found with this id for this user!'});
            return;
        }
        res.json({message: 'Successfully updated your note!', journalNote: req.body.journalNote});
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ message: 'Failed to update your Note!'})
    });
});

module.exports = router;