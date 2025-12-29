// const generateReview = require('../services/ai.service');

// exports.getReview = async (req, res) => {
//   try {
//     const { code, language } = req.body;

//     if (!code) {
//       return res.status(400).json({ error: "...code is required..." });
//     }

//     const review = await generateReview(code, language);
//     res.status(200).json({ review });

//   } catch (error) {
//     res.status(500).json({ error: "failed to generate review :‹" });
//   }
// };


const generateReview = require("../services/ai.service");

exports.getReview = async (req, res) => {
  try {
    console.log("📩 Incoming review request");

    const { code, language } = req.body;

    if (!code) {
      console.log("❌ No code provided");
      return res.status(400).json({ error: "Code is required" });
    }

    console.log("🧠 Calling Groq service...");
    const review = await generateReview(code, language);

    console.log("✅ Review generated successfully");
    res.status(200).json({ review });
  } catch (error) {
    console.error("❌ CONTROLLER ERROR:", error.message);
    res.status(500).json({ error: "Failed to analyze code" });
  }
};
