const express = require("express");
const {
  createSong,
  getSongs,
  getSong,
  deleteSong,
  updateSong,
  searchSong,
} = require("../controllers/songController");

const router = express.Router();

// GET ALL songs
router.get("/", getSongs);

// GET a SINGLE song
router.get("/:id", getSong);

// POST a single song
router.post("/", createSong);

router.get("/search", searchSong);


// DELETE a single song
router.delete("/:id", deleteSong);

// UPDATE a single song
router.patch("/:id", updateSong);

module.exports = router;
