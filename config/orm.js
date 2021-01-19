const connection = require("./connection.js");

// TODO - most of this can be hard coded, I think I will use variable for practice
//      - may need to chang these functions to involve a try catch, aka old school promise
var orm = {
    selectAll: (table) => {
        return connection.promise().query("SELECT * FROM burgers;", [table]);
        // for some reason burgers has to be hard coded, which is fine but I don't understand why
    },
    insertOne: (name, status) => {
        return connection.promise().query("INSERT INTO burgers (burger_name, devoured) VALUES (?, ?);", [name, status]);
    },
    updateOne: (status, id) => {
        return connection.promise().query("UPDATE burgers SET burgers.devoured = ? WHERE burgers.id = ?;", [status, id]);
    },
    delete: (id) => {
        return connection.promise().query("DELETE FROM burgers WHERE burgers.id = ?;", id);
    }
};

module.exports = orm;