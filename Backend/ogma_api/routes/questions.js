var express = require("express");
var router = express.Router();
const MongoHelper = require("../db/mongo_helper.js");

/* GET questions listing. */
router.get("/", function(req, res) {
  MongoHelper.get("questions").then(results => {
    res.status(200).json(results);
  });
});

/* Create a new question/topic */
router.post("/", function(req, res) {
  MongoHelper.create("questions", req.body).then(results => {
    MongoHelper.get("questions").then(data => {
      res.status(200).json(data);
    });
  });
});

/* Delete a question */
router.delete("/:id", function(req, res) {
  MongoHelper.delete("questions", req.params.id).then(results => {
    MongoHelper.get("questions").then(data => {
      res.status(200).json(data);
    });
  });
});

/* Update a learned marker on questions */
router.put("/:id", function(req, res) {
  MongoHelper.updateLearnedMark("learned", req.params.id, req.body).then(results => {
    MongoHelper.get("questions").then(results => {
      res.status(200).json(results);
    });
  });
});

module.exports = router;
