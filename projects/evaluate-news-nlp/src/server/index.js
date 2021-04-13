const dotenv = require('dotenv');
dotenv.config();
var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')

//If you want to refer the environment variables, try putting a prefix process.env. in front of the variable name in the server/index.js file, an example might look like this://
//console.log(`Your API key is ${process.env.API_KEY}`);//


//start of api//
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
const { randomInt } = require('crypto');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));
const port = 8081;


// Setup Server
const server = app.listen(port, listening);
function listening() {
  console.log(`running on localhost: ${port}`);
};

const app = express()

// Setup empty JS object to act as endpoint for all routes
let projectData = {};

app.get('/all', getData)

function getData(req, res) {
  res.send(projectData)
}

//POST ROUTE (posting new info back like zip and users entered feelings)
app.post('/addNewURL')

app.use(express.static('dist'))

//end of api//

console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
   })

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
