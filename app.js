const express = require('express');
const hbs = require("express-handlebars");
const path = require("path");
const routes = require('./server/routes/user');

require('dotenv').config();

const app = express();

//Middleware
app.use(express.urlencoded({ extended: true })); // New
app.use(express.json());
app.use(express.static('./public'));
app.use('/', routes);

// Templating Engine
const handlebars = hbs.create({ extname: '.hbs', });
app.engine('.hbs', handlebars.engine);
app.set('view engine', '.hbs');

//Set view engine and register partials
// app.set ('view engine', 'hbs');
// app.set ('views', path.join(__dirname, 'views'));
// hbs.registerPartials(__dirname + '/views/partials');

const mysql = require('mysql');
const util = require('util');

// Create a connection pool
let pool = mysql.createPool({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE
});

// Promisify the pool connection methods
const getConnection = util.promisify(pool.getConnection).bind(pool);
const query = util.promisify(pool.query).bind(pool);

// Function to handle database operations
async function performDatabaseOperations() {
  let connection;
  try {
    connection = await getConnection();

    const port = process.env.PORT || 8080;
    app.listen(port, () => console.log(`App listening at http://localhost:${port}`));

    // const results = await query('DESC Employees');
    // console.log(results);
  } catch (error) {
    console.error('Error occurred:', error);
  } finally {
    if (connection) {
      connection.release();
    }
  }
}

// Call the function to perform database operations
performDatabaseOperations();