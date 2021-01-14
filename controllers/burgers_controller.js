const express = require("express");
const router = express.Router();

const burger = require("../models/burger.js");

// add routes here

// route to get all data on all burgers
router.get("/", async (req, res) => {
    let result = await burger.selectAll();

    let allBurgers = {
        burgers: result
    };

    res.render("index", allBurgers); // double check that index is where this needs to go
});

// route to create new burger
// takes in burger name and status, returns the new burgers id
    // TODO - make sure this is talking to the dom correctly
    //      - should be able to hard code false for req.body.status
router.post("/api/burgers", async (req, res) => {
    let result = await burger.insertOne(req.body.name, req.body.status);
    
    res.json({id: result.id});
});

// route to update the status(devoured) of a burger
// take in id and new status, returns success or fail
    // TODO - make sure it is talking to the front end okay
    //      - should be able to hard code true for req.body.status
router.put("/api/burgers/:id", async (req, res) => {
    let result = await burger.updateOne(req.body.status, req.params.id); 
    
    if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
    }

    res.status(200).end();
});

// TODO - consider adding delete button, optional

module.exports = router;