const express = require('express');
 
const app = express();
 
app.get("/", function(req, res){
    res.sendFile(__dirname+"/index.html");
})
 
// Heroku will automatically set an environment variable called PORT
const PORT = process.env.PORT || 3000;
 
// Start the server
app.listen(PORT, function(){
    console.log("Server Starting running on http://localhost:"+PORT);
})

function primes(){
    document.getElementById('CPP').src='primes.jpg';
}
function fastpower(){
    document.getElementById('CPP').src='fastpower.jpg';
}
function mergesort(){
    document.getElementById('CPP').src='mergeSort.jpg';
}
function RunningMedian(){
    document.getElementById('CPP').src='RunningMedian.jpg'
}
