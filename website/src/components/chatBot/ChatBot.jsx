import React, { useState } from "react";
import "./ChatBot.css";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappNumber = "1234567890"; // Replace with your WhatsApp number

  return (
    <div className="chat-widget">
      {isOpen && (
        <div className="chat-box">
          <p>
            Hi there 👋 We are currently offline, but if you need any
            assistance, feel free to ask. We will reply as soon as possible.
          </p>
          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="chat-button"
          >
            Send Message
          </a>
        </div>
      )}
      <div className="chat-icon" onClick={() => setIsOpen(!isOpen)}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="Chat"
        />
        <span className="chat-badge">1</span>
      </div>
    </div>
  );
};

export default ChatWidget;
