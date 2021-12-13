const path = require('path');
const express = require('express');
const session = require('express-session');
const handlebars = require('express-handlebars');
const PORT = process.env.PORT || 3001;
const app = express();
const sequelize = require("./connection/sqlConnection");
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const thisSession = {
    secret: 'keepItSecretKeepItSafe',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(session(thisSession));

const helpers = require('./utils/helpers');

const hbs = handlebars.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./controllers/index.js'));

sequelize.sync({ force: false }).then(() =>
{
    app.listen(PORT, () => console.log('Now listening'));
});