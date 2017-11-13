/*!
 * @author Miguel Yax <mig_dj@hotmail.com>
 * date 11/12/2017
 * Person RESTful - router
 */

module.exports = function (app) {
    var personController = require('../controllers/person');

    app.route('/persons')
        .get(personController.list)
        .post(personController.add);

    app.route('/persons/:personId')
        .get(personController.get)
        .put(personController.update)
        .delete(personController.remove);

};