import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white px-6 py-8">
      <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-green-400 mb-4 text-center">
        MindTalk Chat Assistant
      </h1>
      <p className="text-x md:text-xl text-gray-300 mb-6">
        Your smart AI-powered chat assistant, built to help you answer
        questions, spark creativity, learn something new, and hold meaningful
        conversations — all in real-time.
      </p>
      <p className="text-x md:text-xl text-gray-300 mb-6">
       
        Whether you're a student, developer, creator, or just curious, MindTalk
        is here to brainstorm ideas, explain concepts, write content, or simply
        chat — 24/7.
      </p>
      <button
        onClick={() => navigate("/home")}
        className="bg-green-500 hover:bg-green-600 text-black font-semibold px-6 py-3 rounded-lg shadow-lg transition"
      >
        Start Chatting 🚀
      </button>

      {/* Optional footer */}
      <div className="mt-12 text-sm sm:text-base text-gray-400 text-center">
        Built with React, Tailwind, and Google Gemini API
      </div>
    </div>



    
  );
}

export default Home;
