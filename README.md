# 🤖 Nova AI — Intelligent Chatbot

A modern AI-powered chatbot built with Flask and Google Gemini API, featuring a premium dark UI with real-time responses.

🌐 **Live Demo:** [nova-ai-chatbot-production.up.railway.app](https://nova-ai-chatbot-production.up.railway.app)

## ✨ Features

- 💬 Real-time AI responses powered by Gemini 2.5
- 🎨 Premium dark UI with glassmorphism design
- 📱 Fully responsive — works on mobile and desktop
- ✍️ Markdown rendering for formatted AI responses
- ⌨️ Typing indicator while AI is thinking
- 🔒 Secure API key management with .env

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | HTML, CSS, JavaScript |
| Backend | Python, Flask |
| AI Model | Google Gemini 2.5 Flash |
| Markdown | Marked.js |

## ⚙️ Installation

### 1. Clone the repo
```bash
git clone [https://github.com/Sarahrj464/nova-ai-chatbot.git]
cd nova-ai-chatbot
```

### 2. Create virtual environment
```bash
python -m venv .venv
.venv\Scripts\activate  # Windows
```

### 3. Install dependencies
```bash
pip install flask google-generativeai python-dotenv
```

### 4. Setup environment variables
Create `.env` file in root folder:

### 5. Run the app
```bash
python app.py
```

Open `http://127.0.0.1:5000` in your browser.

## 🔑 Get API Key

1. Go to [aistudio.google.com](https://aistudio.google.com)
2. Click **Get API Key**
3. Copy and paste in `.env` file

## 📁 Project Structure
```
nova-ai-chatbot/
├── static/
│   ├── app.js
│   ├── style.css
│   └── nova.png
├── templates/
│   └── index.html
├── app.py
├── Procfile
├── requirements.txt
├── .env
└── .gitignore
```

## 👩‍💻 Author

**Sarah**
- GitHub: [@Sarahrj464](https://github.com/Sarahrj464)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
