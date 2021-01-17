const connection = require("./connection.js");

// TODO - most of this can be hard coded, I think I will use variable for practice
//      - convert function to async, may need try/catch
var orm = {
    selectAll: (table) => {
        // let result = await connection.query("SELECT * FROM ?;", table);
        // return result;
        return connection.promise().query("SELECT * FROM burgers;", table);
    },
    insertOne: (name, status) => {
        // let result = await connection.query("INSERT INTO burgers (burger_name, devoured) VALUES (?, ?);", [name, status]);
        // return result;
        return connection.promise().query("INSERT INTO burgers (burger_name, devoured) VALUES (?, ?);", [name, status]);
    },
    updateOne: (status, id) => {
        // let result = await connection.query("UPDATE burgers SET burgers.devoured = ? WHERE burgers.id = ?;", [status, id]);
        // return result;
        return connection.promise().query("UPDATE burgers SET burgers.devoured = ? WHERE burgers.id = ?;", [status, id]);
    }
};

module.exports = orm;