const User = require("../schema/userschema.js");
const { Webhook } = require("svix");

// Clerk webhook handler
const clerkWebhookHandler = async (req, res) => {
  try {
    const SECRET = process.env.CLERK_SIGNIN_SECRET;
    // Verify webhook signature (adjust as needed for your setup)
    const wh = new Webhook(SECRET);
    const svixHeaders = {
      "svix-id": req.headers["svix-id"],
      "svix-signature": req.headers["svix-signature"],
      "svix-timestamp": req.headers["svix-timestamp"],
    };
    const body = JSON.stringify(req.body);
    const { data, type } = wh.verify(body, svixHeaders);

    switch (type) {
      case "session.created":
        await User.create({
          _id: data.id,
          name: `${data.first_name || ""} ${data.last_name || ""}`.trim(),
          email: data.email_addresses?.[0]?.email_address || "",
          image: data.profile_image_url || "",
        });
        console.log("Data : "+data);
        console.log("User created via webhook:", data.id);
        break;

      case "user.updated":
        await User.findByIdAndUpdate(
          data.id,
          {
            name: `${data.first_name || ""} ${data.last_name || ""}`.trim(),
            email: data.email_addresses?.[0]?.email_address || "",
          },
          { new: true }
        );
        console.log("User updated via webhook:", data.id);
        break;

      case "user.deleted":
        await User.findByIdAndDelete(data.id);
        console.log("User deleted via webhook:", data.id);
        break;

      default:
        console.log("Unhandled Clerk webhook event:", type, "and User ID is ", data.id);
    }

    res.status(200).json({ message: "Webhook processed" });
  } catch (error) {
    console.error("Webhook error:", error);
    res.status(400).json({ error: "Invalid webhook" });
  }
};

module.exports = { clerkWebhookHandler };

//Custom Sign Up

// import User from "../model/userModel.js";
// import express from "express";
// import { getAuth } from "@clerk/express";

// const CreateUser = async (req, res) => {
//   const { userId } = getAuth(req);
//   if (!userId) {
//     console.error("Unauthorized access attempt");
//     return res.status(401).json({ error: "Unauthorized" });
//   }

//   const { clerkId, email, name } = req.body;

//   // Validate required fields
//   if (!clerkId || !email || !name) {
//     return res.status(400).json({ error: "All fields are required" });
//   }

//   const alreadyExists = await User.findOne({ _id: clerkId });
//   if (alreadyExists) {
//     console.log("User already exists ");
//     return res.status(400).json({ error: "User already exists" });
//   }

//   // Create the user
//   const user = await User.create({
//     _id: clerkId, // Assuming data.id is the unique identifier for the user
//     name: `${name}`,
//     email: email,
//     flag: true,
//   });

//   if (user) {
//     res.status(201).json({
//       _id: user._id,
//       name: user.name,
//       email: user.email,
//       flag: user.flag,
//     });

//     console.log("User created successfully:", user);
//   }
// };

// const DeleteUser = async (req, res) => {
//   const { clerkId } = req.query;

//   try {
//     const user = await User.findByIdAndDelete(clerkId);
//     if (!user) {
//       console.log("User not found:", clerkId);
//       return res.status(404).json({ error: "User not found" });
//     }
//     res.status(204).send();
//     console.log("User deleted successfully");
//   } catch (error) {
//     console.error("Error deleting user:", error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// };

// const GetUser = async (req, res) => {
//   const { clerkId } = req.query;
//   try {
//    
//     if (!user) {
//       console.log("User not found . need to Login");
//       res.status(200).json({
//         flag: false,
//       });
//       return;
//     }
//     res.status(200).json({
//       _id: user._id,
//       name: user.name,
//       email: user.email,
//       flag: user.flag,
//     });
//     console.log("User Details : \n ", user);
//   } catch (error) {
//     console.error("Error retrieving user:", error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// };

// export default { CreateUser, DeleteUser, GetUser };
