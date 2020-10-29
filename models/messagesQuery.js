const Joi = require('joi');
const db = require('../db/connection');

const schema = Joi.object().keys({
    username: Joi.string().alphanum().min(3).max(30).required(),
    subject: Joi.string().required(),
    message: Joi.string().max(500).required(),
    imageURL: Joi.string().uri({
        scheme: [
            /https?/
        ]
    })
});

const messages = db.get('messsages');

function getAll() {    
    return messages.find();
}

function create(message) {
    const result = Joi.validate(message, schema);
    if(result.error == null) {
        message.created = new Date;
        return messages.insert(message);
    } else {
        return Promise.reject(result);
    }
}

module.exports = {
    create,
    getAll
};