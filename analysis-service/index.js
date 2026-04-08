const express = require("express");
const app = express();

app.use(express.json());

// Predefined skills list
const skillsList = [
  "React",
  "Node.js",
  "MongoDB",
  "Express",
  "JavaScript",
  "API",
  "SQL",
  "Git"
];

app.post("/analyze", (req, res) => {
  try {
    const { text } = req.body;

    // 🔴 Validation
    if (!text || text.trim() === "") {
      return res.status(400).json({
        status: "error",
        message: "No resume text provided"
      });
    }

    const lowerText = text.toLowerCase();

    // 🔍 Find missing skills
    const missingSkills = skillsList.filter(
      skill => !lowerText.includes(skill.toLowerCase())
    );

    // 📊 Calculate ATS score
    const score = Math.max(0, 100 - missingSkills.length * 10);

    // 💡 Suggestions
    const suggestions = [];

    if (missingSkills.includes("React")) {
      suggestions.push("Add React projects to your resume");
    }

    if (missingSkills.includes("Node.js")) {
      suggestions.push("Mention backend (Node.js) experience");
    }

    if (missingSkills.includes("API")) {
      suggestions.push("Highlight API development experience");
    }

    if (missingSkills.length > 4) {
      suggestions.push("Try adding more technical skills relevant to your role");
    }

    // 📦 Final response (CLEAN STRUCTURE)
    const result = {
      score,
      missingSkills,
      suggestions
    };

    console.log("✅ Analysis completed:", result);

    res.json(result);

  } catch (error) {
    console.error("❌ Analysis error:", error.message);

    res.status(500).json({
      status: "error",
      message: "Internal server error"
    });
  }
});

// Health check (useful for testing)
app.get("/", (req, res) => {
  res.send("Analysis Service is running 🚀");
});

app.listen(3004, () => {
  console.log("Analysis service running on 3004");
});