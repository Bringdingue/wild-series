const express = require("express");

const router = express.Router();

// Import item-related actions
const { browse, read } = require("../../../controllers/programActions");

router.get("/", browse);
router.get("/:id", read);

module.exports = router;
