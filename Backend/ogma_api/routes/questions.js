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
    res.status(201).json("New question created");
  });
});

/* Update a question */
router.put("/:id", function(req, res) {
  MongoHelper.update("questions", req.params.id, req.body).then(results => {
    res.status(200).json("Question updated");
  });
});

/* Delete a question */
router.delete("/:id", function(req, res) {
  MongoHelper.delete("questions", req.params.id).then(results => {
    res.status(204).json("Question removed");
  });
});


// /* Add new comment */
// router.post("/:post_id/comments", function(req, res) {
//   MongoHelper.addComment("posts", req.params.post_id, req.body).then(
//     results => {
//       res.status(201).json("New comment created");
//     }
//   );
// });

module.exports = router;
