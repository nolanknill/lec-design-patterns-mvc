const express = require('express')
const router = express.Router();
const contestantsController = require('../controllers/contestants');




router.get("/:id", contestantsController.getContestant);
router.get("/", contestantsController.getContestants);
// Above line is equivalent to below line
// router.route("/").get((req, res) => { contestantsController.getContestants(req, res) });

module.exports = router;