const express = require("express");
const multer = require("multer");
const axios = require("axios");
const fs = require("fs");
const pdfParse = require("pdf-parse");

const app = express();

const upload = multer({ dest: "uploads/" });

app.post("/upload", upload.single("resume"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const dataBuffer = fs.readFileSync(req.file.path);

    // ✅ THIS WILL WORK NOW
    const pdfData = await pdfParse(dataBuffer);

    const resumeText = pdfData.text;

    console.log("Extracted:", resumeText.substring(0, 200));

    const response = await axios.post("http://localhost:3004/analyze", {
      text: resumeText
    });

    fs.unlinkSync(req.file.path);

    res.json({
      message: "Resume uploaded + analyzed",
      fileName: req.file.originalname,
      analysis: response.data
    });

  } catch (error) {
    console.log("❌ Resume Error:", error.message);

    res.status(500).json({
      error: "Error processing resume",
      details: error.message
    });
  }
});

app.listen(3003, () => {
  console.log("Resume service running on 3003");
});