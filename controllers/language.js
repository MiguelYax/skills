/*!
 * @author Miguel Yax <mig_dj@hotmail.com>
 * date 11/11/2017
 * Person API RESTful - Controller
 */

const languages = require('../data/languages.json');

let controller = {
    /**
     * @api {get} /languages/ Request 
     * @apiName laguages
     * @apiGroup Language
     *
     *
     * @apiSuccess {Array} languageList List of languages
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *     [{
     *           "name": "JavaScript",
     *           "type": "ComputerLanguage",
     *           "url": "http://en.wikipedia.org/wiki/JavaScript"
     *     }]
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 404 Not Found
     *     {
     *       "error": "languages not found"
     *     }
     */
    list: function (req, res) {
        res.json(languages);
    }
};

module.exports = controller; 