//// Setup empty JS object to act as endpoint for all routes// do i need this? ...
//let projectData = {};

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

app.get('/', (req, res) => res.sendFile(path.resolve('dist/index.html')));

//POST ROUTE (posting new info back) 28/04/2021  In this POST route's handler, you have to get the data sent from the form from the request object and make a GET request to MeaningCloud's API.
app.use(express.static('dist'))

app.post('/addNewURL',async(req, res)=>{ 
const meaningCloudTranslation = await fetch(`https://api.meaningcloud.com/sentiment-2.1?key=${key}&url=${url}&lang=en`, { method: 'POST' })
});



//Once you get the data from the MeaningCloud API, simply send it back to the client.

try{
  const Completedata = await meaningCloudTranslation.json();
  console.log(meaningCloudTranslation, Completedata)
  res.send(Completedata);
}catch(error){
  console.log("error", error);
}
//end of api//

