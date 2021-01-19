const express = require("express");
const router = express.Router();

const burger = require("../models/burger.js");

// route to get all data on all burgers
router.get("/", async (req, res) => {
    let result = await burger.selectAll();
    console.log(result);

    let allBurgers = {
        burgers: result
    };

    res.render("index", allBurgers);
});

// route to create new burger
router.post("/api/burgers", async (req, res) => {
    let result = await burger.insertOne(req.body.name);
    
    res.json({id: result.id});
});

// updates burger status
router.put("/api/burgers/:id", async (req, res) => {
    console.log("update called");
    let result = await burger.updateOne(req.params.id); 
    
    if (result.changedRows == 0) {
        return res.status(404).end();
    }
    console.log("status updated");
    res.status(200).end();
});

// deletes an existing burger
router.delete("/api/burgers/:id", async (req, res) => {
    let result = await burger.delete(req.params.id);

    if (result.changedRows == 0) {
        return res.status(404).end();
    }

    res.status(200).end();
})

module.exports = router;