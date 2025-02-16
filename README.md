# Elderly Companion Chatbot

## Overview
Elderly Companion Chatbot is an AI-powered chatbot designed to provide emotional support, companionship, and helpful information to elderly users. It engages in friendly conversations and offers guidance using Google Gemini AI.

## Features
- Conversational AI with personalized responses
- FastAPI backend for efficient communication
- Secure API key handling with environment variables
- Optional React or Streamlit frontend for user interaction
- Supports text-based chats with memory retention

## Tech Stack
- **Backend:** FastAPI, Google Gemini AI, Python-dotenv
- **Frontend:** React.js or Streamlit
- **Deployment:** Uvicorn for running FastAPI server

## Installation
### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/ElderlyCompanionChatbot.git
cd ElderlyCompanionChatbot
```

### 2. Set Up Virtual Environment
```bash
python3 -m venv venv
source venv/bin/activate  # On Linux/macOS
venv\Scripts\activate    # On Windows
```

### 3. Install Dependencies
```bash
pip install -r backend/requirements.txt
```

### 4. Set Up Environment Variables
Create a `.env` file in the `backend` directory and add:
```
GOOGLE_API_KEY=your_google_api_key_here
```

### 5. Run the Backend Server
```bash
cd backend
uvicorn main:app --reload
```

### 6. Run the Frontend (Optional)
If using React:
```bash
cd frontend
npm install
npm start
```
If using Streamlit:
```bash
streamlit run frontend/app.py
```

## API Endpoints
| Method | Endpoint      | Description |
|--------|-------------|-------------|
| GET    | `/`         | Health check |
| POST   | `/chat`     | Send user input and receive chatbot response |

## Contributing
Feel free to submit issues and pull requests to improve the chatbot.

## License
This project is licensed under the MIT License.

