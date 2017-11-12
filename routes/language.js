/*!
 * @author Miguel Yax <mig_dj@hotmail.com>
 * date 11/12/2017
 * Language RESTful - router
 */

module.exports = function (app) {
    var languageController = require('../controllers/language');

    app.route('/languages')
        .get(languageController.list);

};