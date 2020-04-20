/*
===============================================================================
; Title:  app.js
; Author: Laurie Mailloux
; Date:   March 19 2020
; Description: Employees
;==============================================================================
*/

//start program
//requires
const express = require("express");
const http = require("http");
const path = require("path");
const logger = require("morgan");
const mongoose = require("mongoose");
const helmet = require("helmet");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const csrf = require("csurf");
var Employee = require("./models/employee");

// MLab Connection
var mongoDB = "mongodb+srv://Jazmyn:crazy6kids@buwebdev-cluster-1-2bwgd.mongodb.net/test"
mongoose.connect(mongoDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connestion error:"));
db.once("open", function(){
  console.log("Application connected to Atlas MongoDB instance");
  });

//set csrf protection
  var csrfProtection = csrf({cookie: true});

  //initialize application
  var app = express();

  //morgan
  app.use(logger("short"));

  //body parser
  app.use(bodyParser.urlencoded({
    extended: true
  })
  );

  //cookie parser
  app.use(cookieParser());
    
//helmet
  app.use(helmet.xssFilter());

  //CSRF protection
  app.use(csrfProtection);

  //intercept all incoming requests and adds a CSRF token to the response

  app.use(function (request, response, next) {
    var token = request.csrfToken();
    response.cookie("XSRF-TOKEN", token);
    response.locals.csrfToken = token;
    next();
  });

  //sets up the view engine, view's directory path, and the server port
  
  app.set("views", path.resolve(__dirname, "views"));
  app.set("view engine", "ejs");
  app.set('port', process.env.PORT || 8080);

/**
 * Description: Redirects users to the 'index' page.
 * Type: HttpGet
 * Request: n/a
 * Response: index.ejs, Fruit[]
 * URL: localhost:8080
 */



app.get("/", function (request, response) {
  Employee.find({}, function (err, employees) {
    if (err) {
      console.log(err);
      throw err;
    } else {
      console.log(employees);
      response.render('index', {
        title: 'EMS | Home',
        employees: employees
      })
    }
  });
});

   /**
 * Description: Redirects users to the 'new' page.
 * Type: HttpGet
 * Request: n/a
 * Response: new.ejs
 * URL: localhost:8080/new
 */ 
   app.get("/new", function (request, response) {
    response.render("new", {
      title: "EMS | New"
    });
  });

// Renders the list page
app.get("/list", function(request, response){
  Employee.find({}, function(error, employees){
    if(error) throw error;
    response.render("list", {
      title: "Employees",
      employees: employees
    });
  });
});

  /**
 * Description: Processes a form submission.
 * Type: HttpPost
 * Request: textName
 * Response: index.ejs
 * URL: localhost:8080/process
 */
app.post("/process", function (request, response) {
  if (!request.body.txtFirstName || !request.body.txtLastName) {
    response.status(400).send("Entries must have a first and last name.");
    return;
  }

  // get the request's form data
  const firstName = request.body.txtFirstName;
 const lastName = request.body.txtLastName;
  console.log(firstName + " " + lastName);

  // create a employee model
  let employee = new Employee({
    firstName: firstName,
    lastName: lastName
  });

   // save
   employee.save(function(err) {
    if (err) {
      console.log(err);
      throw err;
    } else {
      console.log(firstName + " " + lastName + " saved successfully.");
      response.redirect('/');
    }
  });
});

  /**
 * Description: Redirects users to the 'home' page'
 * Type: HttpGet
 * Request: queryName
 * Response: view.ejs, Employee[] | index.ejs
 * URL: localhost:8080/view/:queryName
 */
 
app.get("/view/:queryName", function (request, response) {
  let queryName = request.params.queryName;
  Employee.find({
    "lastName": queryName
  }, function (error, viewList) {
    if (error) {
      throw error;
    }

    if (viewList.length > 0) {
      response.render("view", {
        title: "Employee Record",
        viewList: viewList
      });
    } else {
      response.redirect("/list");
    }
  });
});

app.delete('/employee', function(req, res) {
	console.log(req.params.queryName);
	let id = req.params.queryName;
	Employee.remove({
		_id : id
	}, function(err) {
		if (err)
			res.send(err);
		else
			res.send('Successfully! Employee has been Deleted.');	
	});
});

/**
 * Creates a new Node.js server and listens on local port 8080.
 */
http.createServer(app).listen(app.get('port'), function() {
  console.log('Application started on port ' + app.get('port'));
});