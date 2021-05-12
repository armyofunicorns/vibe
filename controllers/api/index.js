const router = require('express').Router();

const moodRoutes = require('./mood-routes');
const userRoutes = require('./user-routes');
const journalRoutes = require('./journal-routes');
const photoRoutes = require('./photo-routes');
const questionRoutes = require('./question-routes');

router.use('/moods', moodRoutes);
router.use('/users', userRoutes);
router.use('/journals', journalRoutes);
router.use('/photos', photoRoutes);
router.use('/questions', questionRoutes);

module.exports = router;