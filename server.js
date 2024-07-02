const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');

const sequelize = require('./config/connection');
// const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;


// create settings to be used in engine
const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: '.handlebars'
})

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  // store: new SequelizeStore({
  //   db: sequelize
  // })
};

app.use(session(sess));
app.use((req, res, next) => {
  if (req.session.user_id)
    res.locals.logged_in = true;
  else
    res.locals.logged_in = false;
  next()
})
// create the engine, using the settings from ln:14
app.engine("handlebars", hbs.engine)
app.set("view engine", "handlebars")

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(routes);
sequelize.sync({
  force: false
}).then(() => {
  //listen to port after models are read
  app.listen(PORT, () => console.log('Now listening'));
  // });
})
