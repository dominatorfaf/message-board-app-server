const db = require('../db/connection');

const messages = db.get('messsages');

function getAll() {    
    return messages.find();
}

module.exports = {
    getAll
};