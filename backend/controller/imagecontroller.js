const Image = require("../schema/imageSchema.js"); // Corrected import to use the schema
const cloudinary = require('cloudinary');
const dotenv = require('dotenv');

dotenv.config();

cloudinary.v2.config(
    {
        cloud_name: process.env.CLOUDINARY_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET
    }
)

const fetchImage = async (req, res) => { // Fetch Image
    try {

        const userId = req.query.userId;
        const emailId = req.query.emailId;

        collection = await Image.find({ $or: [{ userId }, { emailId }] }, { updatedAt: 0, __v: 0 }).sort({ createdAt: -1 }).lean();
        res.send(collection);


        console.log("Image Fetched From UserId : " + userId);

    }
    catch (e) {
        console.log(" Image fetch Error :" + e);
        res.status(404).json({ message: `${e}` });

    }

};

const saveImage = async (req, res) => {  // POST request
    try {
        const { imageName, emailId, userId, imageUrl, cloudinary_image_public_id, type } = req.body;

        image = await Image.create({ userId, emailId, cloudinary_image_public_id, imageName, imageUrl, type });
        res.json({ message: " Image Upload Successful" });

        console.log("Image Created from  for UserID : " + userId + "and it's cloudinary public ID is , " + cloudinary_image_public_id);
    }
    catch (e) {
        console.log(" Image save Error :" + e);
        res.status(404).json({ message: `${e}` });
    }

};

const updateImage = async (req, res) => {  //update image name
    try {
        const _id = req.params.id;
        const imageName = req.params.imageName;
        const userId = req.params.userId;

        image = await Image.findByIdAndUpdate({ _id }, { $set: { imageName } }, { new: true }).lean();
        res.json(image);
        console.log("Image Updated From UserId : " + image.userId);
        console.log(image);
    }
    catch (e) {
        console.log(" Image Rename Error :" + e);
        res.status(404).json({ message: `${e}` });
    }


};

const deleteImage = async (req, res) => {  // delete image
    try {

        const cloudinary_image_public_id = `SAAI/${req.params.cloudinary_image_public_id}`;
        const userId = req.params.userId;

        const isImageDeleted = await Image.deleteOne({ cloudinary_image_public_id });

        res.json({ message: "Deletion of image from both MongoDB and Cloudinary is Successful " });

        const result = await cloudinary.v2.uploader.destroy(cloudinary_image_public_id);

        if (!isImageDeleted && !result) {
            res.status(404).json({ message: "Image Deletion unsuccessful " });
        }


        console.log("Image Deleted From UserId : " + userId);
        console.log("Result from Cloudinary : " + JSON.stringify(result));
    }
    catch (e) {
        console.log(" Image Deletion Error :" + e);
        res.status(404).json({ message: `${e}` });

    }
};



module.exports = { fetchImage, saveImage, updateImage, deleteImage };




// res.status(200).json({ message: "Successfully received the api request " });
// console.log("publicIdArray : " + publicIds);
// let publicIds = await Image.find({ userId }, { cloudinary_image_public_id: 1, _id: 0 });
// publicIds = [...publicIds.map((obj) => obj.cloudinary_image_public_id)];
// const users = await User.find({}).select("-email -address");
// console.log("CLOUDINARY_NAME :" + process.env.CLOUDINARY_NAME,
//     "CLOUDINARY_API_KEY :" + process.env.CLOUDINARY_API_KEY,
//     "CLOUDINARY_API_SECRET :" + process.env.CLOUDINARY_API_SECRET)


// const result = await cloudinary.api.resources({ type: "upload", prefix: "SAAI/", resource_type: "image", max_results: 100, next_cursor: "nextCursor" });
// console.log(result);
// console.log(userId + imageName + _id)