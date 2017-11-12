/*!
 * @author Miguel Yax <mig_dj@hotmail.com>
 * date 11/11/2017
 * Person API RESTful - Controller
 */

const mongoose = require('mongoose'),
    person = mongoose.model('Persons');

let controller = {

    list: function (req, res) {
        var personList = [];

        return personList;
    },

    add: function (req, res) {
        var person = {};

        return person;
    },

    get: function (req, res) {
        var id = '';

        return id;
    },

    update: function (req, res) {
        var person = null;

        return person;
    },
    remove: function (req, res) {
        var removed = false;

        return removed;
    },
};

module.exports = controller; 