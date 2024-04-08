const addition = require("../controllers/addition");
const division = require("../controllers/division");
const multiplication = require("../controllers/multiplication");
const subtraction = require("../controllers/subtraction");

const router = require("express").Router();

router.use("/add", addition);
router.use("/sub", subtraction);
router.use("/mul", multiplication);
router.use("/div", division);

module.exports = router;