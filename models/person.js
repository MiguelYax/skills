/*!
 * @author Miguel Yax <mig_dj@hotmail.com>
 * date 11/11/2017
 * Skills API RESTful - person basic model
 */

const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

let personSchema = new Schema({
    name: {
        type: String,
        required: 'Require name'
    },
    email: {
        type: String,
        required: 'Require email'
    },
    phone: {
        type: String,
        required: 'Require phone'
    },
    address: {
        type: String,
        required: 'Require address'
    },
    gener: {
        /**
         * @todo default value to gener is 'indefined' on string, solve this 
         */
        type: [
            {
                type: String,
                enum: ['male', 'female', 'undefined']
            }],
        default: 'undefined'
    },
    isActive: Boolean,
    birtday: {
        day: Number,
        mounth: Number,
        year: Number
    },
    registered: {
        type: Date,
        default: Date.now
    },
    description: String,
    company: String,
    languajes: [
        {
            type: String
        }]
});

module.exports = mongoose.model('Persons', personSchema);