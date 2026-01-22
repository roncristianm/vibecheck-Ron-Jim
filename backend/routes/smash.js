const express = require("express");
const router = express.Router();

// Smash counter (stored in memory for now)
let smashes = 0;

// POST /api/smash -> increases counter and returns the updated value
router.post("/", (req, res) => {
  smashes += 1;
  res.json({ smashes });
});

// GET /api/smash -> returns current counter
router.get("/", (req, res) => {
  res.json({ smashes });
});

module.exports = router;
