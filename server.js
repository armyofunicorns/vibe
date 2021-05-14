const express = require('express');
const sequelize = require('./config/connection');
const routes = require('./controllers');
require("dotenv").config();
// session dependencies
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
    secret: process.env.secret,
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(session(sess));
// turn on routes
app.use(routes);

// turn on connection to db and server
sequelize.sync({force: false}).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});