/*!
 * @author Miguel Yax <mig_dj@hotmail.com>
 * date 11/11/2017
 * Person API RESTful - Controller
 */

const languages = require('../data/languages.json');

let controller = {

    list: function (req, res) {
        res.json(languages);
    }
};

module.exports = controller; 