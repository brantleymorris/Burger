const orm = require("../config/orm.js");

const burger = {
    selectAll: async () => {
        let result = await orm.selectAll("burgers");
        return result[0];
    },
    insertOne: async (name) => {
        let result = await orm.insertOne(name); 
        return result[0];
    },
    updateOne: async (id) => {
        let result = await orm.updateOne(id); 
        return result[0];
    },
    delete: async (id) => {
        let result = await orm.delete(id);
        return result[0];
    }
};

module.exports = burger; 