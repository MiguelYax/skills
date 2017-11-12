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

let personRoutes = require('./routes/person');
personRoutes(app);

app.listen(port);