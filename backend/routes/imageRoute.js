const express = require('express');
const { fetchImage, saveImage, updateImage, deleteImage } = require('../controller/imagecontroller.js')
const router = express.Router();

router.get("/", fetchImage);
router.post("/", saveImage);
router.put("/:id/:imageName/:userId", updateImage);
router.delete("/:id/:userId", deleteImage);

module.exports = router;