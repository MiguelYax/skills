/*!
 * @author Miguel Yax <mig_dj@hotmail.com>
 * date 11/12/2017
 * Person RESTful - router
 */import { get } from 'mongoose';



module.exports = function (app) {
    var personController = require('../controllers/person');

    app.route('/persons')
        .get(personController.list)
        .post(personController.add);
        
    app.route('/tasks/:personId')
        .get(personController.get)
        .put(personController.update)
        .delete(personController.remove);


};