const router = require('express').Router();
const { User } = require('../../models');

router.post('/', (req, res) => {
    User.create({
        userName: req.body.userName,
        password: req.body.password
    })
    .then(dbUserData => {
        req.session.save(() => {
            req.session.user_id = dbUserData.userID;
            req.session.userName = dbUserData.userName;
            req.session.loggedIn = true;
            const userData = {
                'user_id': dbUserData.userID,
                'userName': dbUserData.userName,
                'createdAt': dbUserData.createdAt
            }
            res.json(userData);
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ message:'Failed to create a user!' });
    });
});

router.post('/login', (req, res) => {
    User.findOne({
        where: {
            userName: req.body.userName
        }
    })
    .then(dbUserData => {
        if (!dbUserData) {
            res.status(404).json({ message: 'No user found with this username!'});
            return;
        }
        const validPassword = dbUserData.checkPassword(req.body.password);
        if (!validPassword) {
            res.status(400).json({ message: 'Incorrect Password!'});
            return;
        }
        req.session.save(() => {
            req.session.user_id = dbUserData.userID;
            req.session.userName = dbUserData.userName;
            req.session.loggedIn = true;
            const userData = {
                'user_id': dbUserData.userID,
                'userName': dbUserData.userName,
                'createdAt': dbUserData.createdAt
            }

            res.json({ user: userData, message: 'You are now logged in!'});
        })
    })
    .catch(err => {
        console.error(err);
        res.status(500).json({ message: 'Failed to login!'})
    })
});

module.exports = router;