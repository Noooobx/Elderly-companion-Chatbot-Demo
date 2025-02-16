import { useState } from "react";
import axios from "axios";

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  const sendMessage = async () => {

    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput("");

    try {
      // Update chat history with both user and bot responses
      const updatedHistory = [...chatHistory, `User: ${input}`];

      const response = await axios.post("http://localhost:8000/chat", {
        message: input,
        chat_history: updatedHistory,
      });

      const botMessage = { text: response.data.response, sender: "bot" };
      setMessages([...newMessages, botMessage]);

      // Append bot's response to history
      setChatHistory([...updatedHistory, `Bot: ${response.data.response}`]);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100 p-4">
      <div className="flex-1 overflow-y-auto border p-4 bg-white rounded-lg">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-2 rounded-lg ${
              msg.sender === "user"
                ? "bg-blue-500 text-white self-end"
                : "bg-gray-300 text-black self-start"
            } my-2 max-w-xs`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="flex mt-4">
        <input
          type="text"
          className="flex-1 p-2 border rounded-lg"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
        />
        <button
          className="ml-2 p-2 bg-blue-500 text-white rounded-lg"
          onClick={sendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default App;
