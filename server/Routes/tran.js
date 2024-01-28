const express = require("express");
const router = express.Router();

// controller
const { read } = require("../controller/tran");

router.post("/tran", read);
router.get("/test", (req, res) => {
  res.send("HAHAHA");
});

module.exports = router;
