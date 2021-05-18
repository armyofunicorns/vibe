const withAuth = (req, res, next) => {
    if (!req.session.user_id || !req.session.loggedIn) {
        res.redirect('/');
    } else {
        next();
    }
}
module.exports = withAuth;