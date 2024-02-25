const express = require('express');
const hbs = require("express-handlebars");
//const path = require("path");
const routes = require('./server/routes/user');

require('dotenv').config();

const app = express();

//Middleware
app.use(express.urlencoded({ extended: true })); // New
app.use(express.json());
app.use(express.static('public'));
app.use('/', routes);

// Templating Engine
const handlebars = hbs.create({ extname: '.hbs', });
app.engine('.hbs', handlebars.engine);
app.set('view engine', '.hbs');

//Set view engine and register partials
// app.set ('view engine', 'hbs');
// app.set ('views', path.join(__dirname, 'views'));
// hbs.registerPartials(__dirname + '/views/partials');

//Start server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`App listening at http://localhost:${port}`));