require('dotenv').config();
console.log("🔑 GEMINI KEY VALUE:", process.env.GOOGLE_GEMINI_KEY);

const app = require('./src/app');

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`˃ᴗ˂ lumora backend running on port ${PORT}`);
});
