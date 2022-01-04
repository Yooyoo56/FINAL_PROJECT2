require('dotenv').config();

const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const express      = require('express');
const favicon      = require('serve-favicon');
const hbs          = require('hbs');
const mongoose     = require('mongoose');
const logger       = require('morgan');
const path         = require('path');
const session      = require('express-session');

// important! to use the MONGODB_URI
//  .connect(process.env.MONGODB_URI, {useNewUrlParser: true})
mongoose
  .connect(process.env.MONGODB_URI, {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"😎`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);

const app = express();

// Middleware Setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Express View engine setup

app.use(require('node-sass-middleware')({
  src:  path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  sourceMap: true
}));
      

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));


//added :session
  app.use(
    session({
      secret: process.env.SESS_SECRET,
      resave: false,
      saveUninitialized: true,
       cookie: { maxAge: 60000 } // 60 * 1000 ms === 1 min. it was the commented before(ytak)
    })
  );

  /* Set a cookie */
//get the cookie incoming request
app.get('/setcookie', (req, res) => {
  res.cookie(`Cookie token name`,`encrypted cookie string Value`,{
      maxAge: 5000,
      // expires works the same as the maxAge
      expires: new Date('01 12 2021'),
      secure: true,
      httpOnly: true,
      sameSite: 'lax'
  });
  res.send('Cookie have been saved successfully🥳!');
});

app.get('/getcookie', (req, res)=> {
  //show the saved cookies
  console.log(req.cookies);
  res.send(req.cookies);
})



// default value for title local
app.locals.title = 'My Coach - find your coach';


const index = require('./routes/index');
app.use('/', index);


module.exports = app;
