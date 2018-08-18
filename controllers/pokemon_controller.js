var express = require("express");

var router = express.Router();

var pokemon = require("../models/pokemon.js");

router.get("/", function(req, res) {
    pokemon.all(function(data) {
      var PokeObject = {
        team: data
      };
      console.log(PokeObject);
      res.render("index", PokeObject);
    });
});

router.post("/api/pokemon", function(req, res) {
    pokemon.create(["pokemon_name", "picked"], [req.body.pokemon_name, req.body.picked], function(result) {
        // Send back the ID of the new quote
        res.json({ id: result.insertId });
    });
});
  
router.put("/api/pokemon/:id", function(req, res) {
var condition = "id = " + req.params.id;

console.log("condition", condition);

pokemon.update(
    {
    picked: req.body.picked
    },
    condition,
    function(result) {
    if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
    }
    res.status(200).end();

    }
);
});
  
  // Export routes for server.js to use.
  module.exports = router;
  