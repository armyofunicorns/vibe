const router = require('express').Router();
const { Mood } = require('../../models');
const sequelize = require('../../config/connection');

// route for getting all the moods
router.get('/', (req, res) => {
    Mood.findAll({
        attributes: [
            'moodId',
            'title',
            'color'
        ]
    })
    .then(dbMoodData => res.json(dbMoodData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;
