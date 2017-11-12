/*!
 * @author Miguel Yax <mig_dj@hotmail.com>
 * date 11/11/2017
 * Skills API RESTful
 */

const express = require('express'),
    app = express(),
    mongoose = require('mongoose'),
    Person = require('./models/person'),
    bodyParser = require('body-parser'),
    port = process.env.PORT || 3000;

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/demo');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', false);
    if ('OPTIONS' === req.method) {
        res.status(200).end();
    } else {
        next();
    }
});

let personRoutes = require('./routes/person');
let languageRoutes = require('./routes/language');
personRoutes(app);
languageRoutes(app);

app.listen(port);