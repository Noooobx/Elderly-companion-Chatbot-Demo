from fastapi import FastAPI
from pydantic import BaseModel
import google.generativeai as genai
import os
from dotenv import load_dotenv
from fastapi.middleware.cors import CORSMiddleware

load_dotenv()
api_key = os.getenv("GOOGLE_API_KEY")


genai.configure(api_key=api_key)
model = genai.GenerativeModel('gemini-1.0-pro')

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Change this to your frontend URL for security
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ChatRequest(BaseModel):
    message: str
    chat_history: list = []


@app.post("/chat")
async def chat(request: ChatRequest):
    persona = "You are a wise elderly companion who gives comforting advice with patience."
    context = persona + "\n" + "\n".join(request.chat_history) + "\nUser: " + request.message

    try:
        response = model.generate_content(context)
        return {"response": response.text}
    except Exception as e:
        return {"error": str(e)}
    

@app.get("/")
async def root():
    return {"message": "Elderly Companion Chatbot Backend is Running!"}