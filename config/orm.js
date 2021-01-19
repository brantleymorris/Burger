const connection = require("./connection.js");

var orm = {
    selectAll: (table) => {
        return connection.promise().query("SELECT * FROM burgers;");
    },
    insertOne: (name) => {
        return connection.promise().query("INSERT INTO burgers (burger_name, devoured) VALUES (?, false);", name);
    },
    updateOne: (id) => {
        return connection.promise().query("UPDATE burgers SET burgers.devoured = true WHERE burgers.id = ?;", id);
    },
    delete: (id) => {
        return connection.promise().query("DELETE FROM burgers WHERE burgers.id = ?;", id);
    }
};

module.exports = orm;