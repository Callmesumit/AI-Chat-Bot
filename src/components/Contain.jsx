import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import "../App.css";
import Header from "./header";
import Footer from "./Footer";

function Contain() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [messages, setMessages] = useState([]);
  const messageEndRef = useRef(null);

  async function generateAnswer() {
    if (!question.trim()) return;

    const userMessage = { type: "user", text: question };
    setMessages((prev) => [...prev, userMessage]);
    setAnswer("Loading...");

    try {
      const response = await axios({
        url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyAEyER6ZQnA3-owqUFd9FUhw3cf9lqurjo",
        method: "post",
        data: {
          contents: [
            {
              parts: [{ text: question }],
            },
          ],
        },
      });

      const result = response.data.candidates[0].content.parts[0].text;
      const botMessage = { type: "bot", text: result };
      setMessages((prev) => [...prev, botMessage]);
      setAnswer("");
      setQuestion("");
    } catch (error) {
      console.error(error);
      const errorMsg = { type: "bot", text: "Sorry, something went wrong!" };
      setMessages((prev) => [...prev, errorMsg]);
      setAnswer("");
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      generateAnswer();
    }
  };

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, answer]);

  return (
    <>
      <h1 className="bg-amber-300 mb-5 mt-2 p-2 text-center text-lg md:text-2xl font-bold">
        Ask You Any Question ?
      </h1>

      <div className="flex flex-col w-full max-w-4xl mx-auto min-h-[80vh] bg-gradient-to-br from-gray-800 to-gray-600 text-gray-900 rounded-xl shadow-md px-4 sm:px-6 py-4">
        <main className="flex-1 overflow-y-auto space-y-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`max-w-2xl p-3 rounded-lg shadow-md text-sm ${
                msg.type === "user"
                  ? "bg-blue-400 text-red-800 self-end ml-auto"
                  : "bg-gray-300 text-blue-950 self-start mr-auto"
              }`}
            >
              {msg.text}
            </div>
          ))}
          {answer === "Loading..." && (
            <div className="bg-gray-200 text-green-700 max-w-2xl p-3 rounded-lg shadow self-start mr-auto animate-pulse text-sm">
              Loading...
            </div>
          )}
          <div ref={messageEndRef}></div>
        </main>

        <footer className="mt-4 p-4 bg-gray-200 border border-black flex flex-col sm:flex-row items-center gap-3">
          <textarea
            className="w-full flex-grow p-2 shadow-black border border-gray-300 rounded-md resize-none h-20 bg-white text-red-800 placeholder-black text-sm"
            placeholder="Type your question here..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            onKeyDown={handleKeyPress}
          ></textarea>
          <button
            className="w-full sm:w-auto bg-blue-500 shadow-black border border-black text-black px-5 py-2 rounded-md font-medium shadow-sm hover:bg-blue-600 transition text-sm"
            onClick={generateAnswer}
          >
            Send 🚀
          </button>
        </footer>
      </div>
    </>
  );
}

export default Contain;
