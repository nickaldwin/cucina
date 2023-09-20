const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const recipiesController = require("../controllers/recipies");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Post Routes - simplified for now
router.get("/:id", ensureAuth, recipiesController.getRecipies);

router.post("/createRecipies", upload.single("file"), recipiesController.createRecipies);

router.put("/likeRecipies/:id", recipiesController.likeRecipies);

router.delete("/deletePost/:id", recipiesController.deleteRecipies);

module.exports = router;
