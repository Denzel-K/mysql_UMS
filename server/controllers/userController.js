const mysql = require('mysql');

// Connection Pool
let connection = mysql.createPool({
  host: 'sql11.freemysqlhosting.net',
  user: 'sql11696257',
  password: 'gvEaBccqlU',
  database: 'sql11696257'
});


// View Users
exports.view = (req, res) => {
  connection.query('SELECT * FROM Employees WHERE status = "active"', (err, rows) => {
    // When done with the connection, release it
    if (!err) {
      let removedUser = req.query.removed;
      res.render('home', { rows, removedUser });
    } else {
      console.log(err);
    }
    //console.log('The data from Employees table: \n', rows);
  });
}

// Find User by Search
exports.find = (req, res) => {
  let searchTerm = req.body.search;
  connection.query('SELECT * FROM Employees WHERE first_name LIKE ? OR last_name LIKE ?', ['%' + searchTerm + '%', '%' + searchTerm + '%'], (err, rows) => {
    if (!err) {
      res.render('home', { rows });
    } else {
      console.log(err);
    }
    console.log('The data from Employees table: \n', rows);
  });
}

exports.form = (req, res) => {
  res.render('add-user');
}

// Add new user
exports.create = (req, res) => {
  const { first_name, last_name, email, phone, role } = req.body;
  // let searchTerm = req.body.search;

  connection.query('INSERT INTO Employees SET first_name = ?, last_name = ?, email = ?, phone = ?, role = ?', [first_name, last_name, email, phone, role], (err, rows) => {
    if (!err) {
      res.render('add-user', { alert: 'Employee added successfully.' });
    } else {
      console.log(err);
    }
    //console.log('The data from Employees table: \n', rows);
  });
}


// Edit user
exports.edit = (req, res) => {
  connection.query('SELECT * FROM Employees WHERE id = ?', [req.params.id], (err, rows) => {
    if (!err) {
      res.render('edit-user', { rows });
    } else {
      console.log(err);
    }
    //console.log('The data from Employees table: \n', rows);
  });
}


// Update User
exports.update = (req, res) => {
  const { first_name, last_name, email, phone, role } = req.body;
  connection.query('UPDATE Employees SET first_name = ?, last_name = ?, email = ?, phone = ?, role = ? WHERE id = ?', [first_name, last_name, email, phone, role, req.params.id], (err, rows) => {

    if (!err) {
      connection.query('SELECT * FROM Employees WHERE id = ?', [req.params.id], (err, rows) => {
        // When done with the connection, release it
        
        if (!err) {
          res.render('edit-user', { rows, alert: `${first_name} has been updated.` });
        } else {
          console.log(err);
        }
        //console.log('The data from user table: \n', rows);
      });
    } else {
      console.log(err);
    }
    //console.log('The data from user table: \n', rows);
  });
}

// Delete User
exports.delete = (req, res) => {

  // Delete a record

  // connection.query('DELETE FROM user WHERE id = ?', [req.params.id], (err, rows) => {

  //   if(!err) {
  //     res.redirect('/');
  //   } else {
  //     console.log(err);
  //   }
  //   console.log('The data from user table: \n', rows);

  // });

  // Hide a record

  connection.query('UPDATE Employees SET status = ? WHERE id = ?', ['removed', req.params.id], (err, rows) => {
    if (!err) {
      let removedUser = encodeURIComponent('Employee successeflly removed.');
      res.redirect('/?removed=' + removedUser);
    } else {
      console.log(err);
    }
    //console.log('The data from beer table are: \n', rows);
  });

}

// View Users
exports.viewall = (req, res) => {

  // User the connection
  connection.query('SELECT * FROM Employees WHERE id = ?', [req.params.id], (err, rows) => {
    if (!err) {
      res.render('view-user', { rows });
    } else {
      console.log(err);
    }
    console.log('The data from user table: \n', rows);
  });

}