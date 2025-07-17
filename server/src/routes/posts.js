
// server/src/routes/posts.js
const express = require('express');
const router = express.Router();

// Sample route
router.get('/', async (req, res) => {
  res.send("All posts");
});

module.exports = router;
