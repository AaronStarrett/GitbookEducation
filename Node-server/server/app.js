var express = require('express'); 
var app = express();
var test = require('./controllers/testcontroller');


app.use('/test', test)


app.listen(3000, function(){
    console.log("Hey Man!!!")
});

app.use('/api/test', function(req, res){
    res.send("This is data from the /api/test endpoint. It's from the server.");
});
