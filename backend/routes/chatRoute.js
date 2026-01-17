const express = require('express');
const chatController = require('../controller/chatController.js');
const router = express.Router();

router.get("/",chatController);

module.exports= router ;

