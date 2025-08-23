const express = require("express");
const multer = require("multer");
const cors = require("cors");
const uploadFile = require("./services/storage.services");
const postModel = require("./models/post.model");

const app = express();

// Middleware
app.use(express.json());
app.use(cors()); // allow requests from frontend

const upload = multer({ storage: multer.memoryStorage() });

// Create Post
app.post("/posts", upload.single("watch"), async (req, res) => {
  try {
    const caption = req.body.caption;
    const file = req.file?.buffer;

    if (!file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    // Upload file to storage service
    const result = await uploadFile(file, req.file.originalname);

    // Save to DB
    const post = await postModel.create({
      caption,
      url: result.url,
    });

    res.json({
      message: "Post created successfully",
      post,
    });
  } catch (err) {
    console.error("Error creating post:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// Get Posts
app.get("/posts", async (req, res) => {
  const posts = await postModel.find();
  res.json({ posts });
});

module.exports = app;
