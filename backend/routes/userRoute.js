const userController = require("../controller/userController.js");
const express = require('express');

const router = express.Router();

router.post("/",userController);

module.exports=router;

const { Router } = require('express');
const router = Router(); 
const UserRoute = require('../model/UserRoute') 
const Authorization = require('../middleware/Authorization')

// Get all userRoutes
router.get('/', Authorization, async(req, res) => {
    try {
        const userRoutes = await UserRoute.find()
        res.send(userRoutes)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

// Create a new userRoute
router.post('/', Authorization, async(req, res) => {
    try {
        let userRoute = new UserRoute({
            key:value
        })
        userRoute = await userRoute.save()
        res.send(userRoute)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

// Get userRoute By ID
router.get('/:id', Authorization, async(req, res) => {
    try {
        const userRoute = await UserRoute.findById(req.params.id)
        res.send(userRoute)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

// Update userRoute By ID
router.put('/:id', Authorization, async(req, res) => {
    try {
        const userRoute = await UserRoute.findByIdAndUpdate(req.params.id, {
            key:value
        },{new: true})
        res.send(userRoute)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

// Delete userRoute By ID
router.delete('/:id', Authorization, async(req, res) => {
    try {
        const userRoute = await UserRoute.findByIdAndDelete(req.params.id)
        res.send(userRoute)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

module.exports = router