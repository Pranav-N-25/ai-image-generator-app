const Image = require("../schema/imageSchema.js"); // Corrected import to use the schema
const fetchImage = async (req, res) => {
    const userId = req.query.userId;
    collection = await Image.find({ userId }, { updatedAt: 0, __v: 0 }).sort({ createdAt: -1 }).lean();
    // const users = await User.find({}).select("-email -address");
    res.send(collection);
    console.log("Image Fetched From UserId : " + userId);

};

const saveImage = async (req, res) => {  // POST request
    const { imageName, userId, imageUrl } = req.body;
    console.log("Image name : " + imageName + "\n User ID : " + userId + "\n Image URL : " + imageUrl);
    image = await Image.create({
        userId, imageName, imageUrl
    })

    res.json(image);

};

const updateImage = async (req, res) => {
    const _id = req.params.id;
    const imageName = req.params.imageName;
    const userId = req.params.userId;
    console.log(userId + imageName + _id)
    image = await Image.findByIdAndUpdate({ _id }, { $set: { imageName } }, { new: true }).lean();
    res.json(image);
    console.log("Image Updated From UserId : " + image.userId);
    console.log(image);


};

const deleteImage = async (req, res) => {
    const id = req.params.id;
    const userId = req.params.userId;
    const isImageDeleted = await Image.findByIdAndDelete({ _id: id }).lean();

    if (!isImageDeleted) {
        res.status(404).json({ message: "Image not Found" });
    }

    res.json({ message: "Deletion successful" });
    console.log("Image Deleted From UserId : " + userId)
};

module.exports = { fetchImage, saveImage, updateImage, deleteImage };

// res.status(200).json({ message: "Successfully received the api request " });
