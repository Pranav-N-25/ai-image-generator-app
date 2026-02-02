const Image = require("../schema/imageSchema.js"); // Corrected import to use the schema
const fetchImage = (req, res) => {
    res.send("fetchImage");

};

const saveImage = async (req, res) => {  // POST request
    const { imageName, userId, imageUrl } = req.body;
    console.log("Image name : " + imageName + "\n User ID : " + userId + "\n Image URL : " + imageUrl);
    // res.status(200).json({ message: "Successfully received the api request " });
    image = await Image.create({
        imageName, userId, imageUrl
    })
    
    res.json(image);

};

const updateImage = (req, res) => {
    res.send("updateImage");

};

const deleteImage = (req, res) => {
    res.send("deleteImage");

};

module.exports = { fetchImage, saveImage, updateImage, deleteImage };