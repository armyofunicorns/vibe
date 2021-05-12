const router = require('express').Router();

const moodRoutes = require('./mood-routes');
const userRoutes = require('./user-routes');
const journalRoutes = require('./journal-routes');
const photoRoutes = require('./photo-routes');

router.use('/moods', moodRoutes);
router.use('/users', userRoutes);
router.use('/journals', journalRoutes);
router.use('/photos', photoRoutes);

module.exports = router;