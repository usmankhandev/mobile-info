const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sql = require('mssql');

const app = express();
app.use(bodyParser.json());
app.use(cors());
let config = {
	user: 'sa',
	password: 'UsmanSql123789',
	server: 'localhost',
	database: 'DB21',
};
new sql.connect(config, err => {
	console.log(err);
});

/*********************************************************************************************
 ***************************************** Admin Login ***************************************
 *********************************************************************************************/

app.post('/api/auth', (req, res) => {
	const { name, email, password } = req.query;
	if (name && email && password) {
		request = new sql.Request();
		request.query(
			`Insert into admin(name, email, password) values ('Usman Khan == ${name}', 'osmankhann@yahoo.com == ${email}', 'mobile123789 == ${password}')`,
			function(error, results, fields) {
				if (results.length > 0) {
					request.session.loggedin = true;
					request.session.email = email;
					response.redirect('/admindashboard');
				} else {
					response.send('Incorrect Username and/or Password or email');
				}
				response.end();
			}
		);
	} else {
		response.send('Please enter Name and Password!');
		response.end();
	}
});

app.get('/api/admindashboard', function(request, response) {
	if (request.session.loggedin) {
		response.send('Welcome back, ' + request.session.email + '!');
	} else {
		response.send('Please login to view this page!');
	}
	response.end();
});

// ********************************************************************************************
// app.post('/api/student/add', function(req, res) {
// 	const { FirstName, LastName, Contact, Email, RegistrationNumber, Status } = req.query;
// 	request = new sql.Request();

// 	let query = `Insert into Student(FirstName, LastName, Contact, Email, RegistrationNumber, Status)
//     values('${FirstName}', '${LastName}', '${Contact}', '${Email}', '${RegistrationNumber}', ${`(Select LookupId from Lookup where '${Status}' = Lookup.LookupId )`})`;
// 	request.query(query, function(err, data) {
// 		if (err) {
// 			console.log(err);
// 			res.send(err);
// 		}
// 		res.send(data);
// 	});
// });

/********************************************************************************************
 ***************************************** Manage Category ***********************************
 *********************************************************************************************/

app.post('/api/category/add', function(req, res) {
	const { categoryName } = req.query;
	request = new sql.Request();
	let Query = `Insert into category(categoryName) values('${categoryName}'`;
	request.query(Query, (err, data) => {
		if (err) {
			console.log(err);
			res.send(err);
		}
		res.send(data);
	});
});

app.get('/api/categories', function(req, res) {
	request = new sql.Request();
	let Query = `select * from category`;
	request.query(Query, (err, data) => {
		if (err) {
			res.send(err);
		}
		res.send(data);
	});
});

// Listen to the port 5000.
let server = app.listen(5000, function() {
	console.log('connection is established');
});
