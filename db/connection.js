const monk = require('monk');
const connectionString = `mongodb+srv://master:${process.env.DB_PASS}@cluster0.906uy.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
const db = monk(connectionString);

module.exports = db;