const orm = require("../config/orm.js");

// create functions on burger object
const burger = {
    selectAll: async () => {
        let result = await orm.all("burgers");
        return result;
    },
    insertOne: async (name, status) => {
        let result = await orm.insertOne(name, status); 
        return result;
    },
    updateOne: async (status, id) => {
        let result = await orm.updateOne(status, id); 
        return result;
    }
};

// exports burger functions
module.exports = burger; 