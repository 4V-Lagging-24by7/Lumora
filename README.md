# 🌟 Lumora — AI-Powered Code Review Tool

Lumora is an AI-powered code review platform that helps developers understand their code better.  
You paste your code, select the language, and Lumora reviews it like a real senior software engineer.

The feedback is clear, honest, and human — not robotic.

Built as a full-stack project to explore real-world AI integration and modern frontend design.

👩‍💻 Built by **Charvi Singh**

---

## ✨ What Lumora Does

- Reviews code using an AI model
- Explains mistakes in simple English
- Classifies issues (logic, design, performance, etc.)
- Suggests cleaner and better approaches
- Provides mentor-style feedback
- Works with a modern dark-themed UI

---

## 🧠 Key Features

- AI-powered code review
- Human-like feedback (not textbook or robotic)
- Multiple programming language support
- Clean split-view editor and review panel
- Dark mode UI
- Real-time backend API
- Built as a complete full-stack application

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Vite
- Tailwind CSS

### Backend
- Node.js
- Express.js

### AI / LLM
- Groq API
- LLaMA model

---

## 📁 Project Structure
Lumora/
├── backend/
│ ├── server.js
│ ├── package.json
│ ├── package-lock.json
│ ├── src/
│ │ ├── routes/
│ │ ├── controllers/
│ │ └── services/
│
├── frontend/
│ ├── src/
│ ├── public/
│ ├── package.json
│ ├── tailwind.config.js
│ └── vite.config.js
│
└── README.md

---

## ⚙️ How to Run Locally

### 1️⃣ Clone the Repository

git clone https://github.com/4V-Lagging-24by7/Lumora.git
cd Lumora

### 2️⃣ Backend Setup
cd backend
npm install


### Create a .env file inside the backend folder:

GROQ_API_KEY=your_groq_api_key_here


###Run the backend server:

node server.js


###Backend will run on:

http://localhost:3000

### 3️⃣ Frontend Setup

### Open a new terminal:

cd frontend
npm install
npm run dev


### Frontend will run on:

http://localhost:5173
