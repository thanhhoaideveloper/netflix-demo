const express = require("express");
const {
  addLikeMovie,
  allLikeMovie,
  removeLikeMovie,
} = require("../controllers/userController");
const router = express.Router();

router.post("", addLikeMovie);
router.get("/like/:email", allLikeMovie);
router.post("/remove", removeLikeMovie);

module.exports = router;
