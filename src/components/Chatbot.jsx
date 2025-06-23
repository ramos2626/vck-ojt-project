import React, { useState } from 'react';
import './Chatbot.css'
const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="chatbot-container">
      <button 
        className="chatbot-open-button"
        onClick={toggleChatbot}
      >
        💬
      </button>
      <div className={`chatbot-window ${isOpen ? 'open' : 'closed'}`}>
        {/* Chat content would go here */}
      </div>
    </div>
  );
};

export default Chatbot;