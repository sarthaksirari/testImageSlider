var express = require('express');
var app = express();

require('./router/main')(app);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname+'/public'));

app.engine('html', require('ejs').renderFile);

app.get('/read-data-file', function (req, res) {
    var csv = require('csvtojson');
        csv().fromFile("./data/dataTimeSeries.csv").then((jsonObj)=>{
            res.json(jsonObj);
        });
});

app.get('/read-prediction-file', function (req, res) {
    var csv = require('csvtojson');
        csv().fromFile("./data/forecast_data.csv").then((jsonObj)=>{
            res.json(jsonObj);
        });
});

var server = app.listen(3000, function () {
    console.log("We have started our server on port 3000");
});