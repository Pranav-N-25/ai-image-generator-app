const express = require('express');
const {fetchImage , saveImage, updateImage, deleteImage} = require('../controller/imagecontroller.js')
const router = express.Router();

router.get("/",fetchImage);
router.post("/",saveImage);
router.put("/",updateImage);
router.delete("/",deleteImage);

module.exports=router;