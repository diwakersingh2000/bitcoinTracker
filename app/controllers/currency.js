var express = require('express');
var currencyRouter = express.Router();
var request = require('request');

module.exports.controller = function (app) {


    currencyRouter.post('/currency', function (req, res) {
        var body = req.body;
        if (body.Time == "oneYear"){
            request('https://api.coindesk.com/v1/bpi/historical/close.json?start=2017-09-25&end=2018-09-25', { json: true }, (err, result, body) => {
                if (err) { res.send(err); }
                res.send(result.body);
                });
        }
        else if (body.Time == "oneMonth"){
            request('https://api.coindesk.com/v1/bpi/historical/close.json?start=2018-08-25&end=2018-09-25', { json: true }, (err, result, body) => {
                if (err) { res.send(err); }
                res.send(result.body);
                });
        }
        else if(body.Time == "oneWeek"){
            request('https://api.coindesk.com/v1/bpi/historical/close.json?start=2018-09-19&end=2018-09-25', { json: true }, (err, result, body) => {
                if (err) { res.send(err); }
                res.send(result.body);
                });
        }
        else if(body.Time == "oneDay"){
            request('https://api.coindesk.com/v1/bpi/historical/close.json?start=2018-09-25&end=2018-09-25', { json: true }, (err, result, body) => {
                if (err) { res.send(err); }
                res.send(result.body);
                });
        }
        else if(body.Time == "twelveHours"){
            request('https://api.coindesk.com/v1/bpi/currentprice.json', { json: true }, (err, result, body) => {
                if (err) { res.send(err); }
                res.send(result.body);
                });
        }
        else if(body.Time == "sixHours"){
            request('https://api.coindesk.com/v1/bpi/currentprice.json', { json: true }, (err, result, body) => {
                if (err) { res.send(err); }
                res.send(result.body);
                });
        }
    });

    app.use('/api', currencyRouter);
}