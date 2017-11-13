/*!
 * @author Miguel Yax <mig_dj@hotmail.com>
 * date 11/11/2017
 * Person API RESTful - Controller
 */

const mongoose = require('mongoose'),
    Person = mongoose.model('Persons');

let controller = {

    list: function (req, res) {
        Person.find({}, (err, persons) => {
            if (err) {
                res.send(err);
            }
            res.json(persons);
        });
    },

    /**
     * 
     * @api {post} /persons add person
     * @apiName persons
     * @apiGroup persons
     * @apiVersion  1.0.0
     * 
     * 
     * @apiParam  {Object} person person information
     * 
     * @apiSuccess (200) {Object} response response on save
     * 
     * @apiParamExample  {Person} Request-Example:
       {
           {
                "name": "Miguel Yax",
                "email": "mig_dj@hotmail.com",
                "phone": "502 12345678",
                "address": "Guatemala",
                "gener": "male",
                "isActive": true,
                "birtday": {
                    "day": 1,
                    "month": 1,
                    "year": 1990
                },
                "company": "PLUS",
                "languajes": ["JavaScript", "PHP", "Java", "C#"]
       }
     * 
     * 
     * @apiSuccessExample {type} Success-Response:
       {
           success : true,
           data: {
                    "__v": 0,
                    "name": "Miguel Yax",
                    "email": "mig_dj@hotmail.com",
                    "phone": "502 12345678",
                    "address": "Guatemala",
                    "isActive": true,
                    "company": "PLUS",
                    "_id": "5a08f3abf8cd4a3eb00a42c4",
                    "languajes": [
                        "JavaScript",
                        "PHP",
                        "Java",
                        "C#"
                    ],
                    "registered": "2017-11-13T01:21:47.449Z",
                    "birtday": {
                        "day": 1,
                        "month": 1,
                        "year": 1990
                    },
                    "gener": [
                        "male"
                    ]
              }
       }
     * 
     * 
     */
    add: function (req, res) {
        let newPerson = new Person(req.body);
        newPerson.save((err, person) => {
            if (err) {
                res.send(err);
            }
            res.json(person);
        });
    },

    get: function (req, res) {
        Person.findById(req.params.personId, (err, person) => {
            if (err) {
                res.send(err);
            }
            res.json(person);
        });
    },

    update: function (req, res) {
        Person.findOneAndUpdate({ _id: req.params.personId }, req.body, { new: true }, (err, person) => {
            if (err) {
                res.send(err);
            }
            res.json(person);
        });
    },
    remove: function (req, res) {
       
        Person.remove({ _id: req.params.personId }, (err, person) => {
            if (err) {
                res.send(err);

            }
            res.json({
                message: 'Person successfully deleted'
            });
        });
    },
};

module.exports = controller; 