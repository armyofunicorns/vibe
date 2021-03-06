const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');
const dashboardRoutes = require('./dashboard-routes.js');
const answersRoutes = require('./answers-routes.js');
const journalRoutes = require('./journal-routes.js');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/answers', answersRoutes);
router.use('/journals', journalRoutes);


router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;