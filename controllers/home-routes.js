const router = require('express').Router();
const sequelize = require('../config/connection');
const { Journal, User, Answer} = require('../models');

// route for login page
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
});
