const orm = require("../config/orm.js");

// create functions on burger object
const burger = {
    selectAll: async () => {
        let result = await orm.selectAll("burgers");
        return result[0];
    },
    insertOne: async (name, status) => {
        let result = await orm.insertOne(name, status); 
        return result[0];
    },
    updateOne: async (status, id) => {
        let result = await orm.updateOne(status, id); 
        return result[0];
    }
};

// exports burger functions
module.exports = burger; 