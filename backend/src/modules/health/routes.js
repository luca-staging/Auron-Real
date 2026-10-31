const express = require("express");

const router = express.Router();

router.get("/", function health(_req, res) {
  res.json({
    status: "ok",
    service: "heldnav-api",
    timestamp: new Date().toISOString(),
  });
});

module.exports = router;