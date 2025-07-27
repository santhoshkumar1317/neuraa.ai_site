import React, { useState } from "react";
import styles from "../styles/components_styles/Chatbot.module.css";

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; sender: string }[]>(
    []
  );
  const [showQuestions, setShowQuestions] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState<string | null>(null);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      // Start the conversation when opening the chat
      setMessages([]);
      setShowQuestions(false);
      setSelectedQuestion(null);
      setTimeout(() => {
        typeMessage("Hi, how can I help you today?", "bot");
      }, 500);
    }
  };

  const typeMessage = (text: string, sender: string) => {
    const speed = 50; // typing speed in milliseconds
    const initialMessage = { text: "", sender };
    setMessages((prev) => [...prev, initialMessage]);

    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setMessages((prev) => {
          const newMessages = [...prev];
          const lastMessageIndex = newMessages.length - 1;
          // Ensure the message at lastMessageIndex exists before updating
          if (newMessages[lastMessageIndex]) {
            newMessages[lastMessageIndex] = {
              ...newMessages[lastMessageIndex],
              text: text.substring(0, i + 1),
            };
          }
          return newMessages;
        });
        i++;
      } else {
        clearInterval(typingInterval);
        if (sender === "bot") {
          setShowQuestions(true);
        }
      }
    }, speed);
  };

  const predefinedQuestions = [
    {
      question: "What is this website about?",
      answer:
        "This website showcases our try-on solutions for various products.",
    },
    {
      question: "How can I contact you?",
      answer: "You can reach us via the contact form on our contact page.",
    },
    {
      question: "What products do you offer?",
      answer:
        "We offer virtual try-on solutions for beauty, dressing, and hair products.",
    },
  ];

  const handleQuestionClick = (question: string, answer: string) => {
    setSelectedQuestion(question);
    setShowQuestions(false);
    typeMessage(question, "user");
    setTimeout(() => {
      typeMessage(answer, "bot");
    }, 500 + question.length * 50);
  };

  const handleBackToQuestions = () => {
    setSelectedQuestion(null);
    setShowQuestions(true);
  };

  return (
    <div className={styles.chatbotContainer}>
      <div className={styles.chatIcon} onClick={toggleChat}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      </div>
      {isOpen && (
        <div className={styles.chatWindow}>
          <div className={styles.chatHeader}>
            <h2>Chatbot</h2>
            <button onClick={toggleChat}>&times;</button>
          </div>
          <div className={styles.chatBody}>
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`${styles.message} ${styles[msg.sender]}`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className={styles.chatFooter}>
            {showQuestions && !selectedQuestion && (
              <div className={styles.questions}>
                {predefinedQuestions.map((item, index) => (
                  <button
                    key={index}
                    onClick={() =>
                      handleQuestionClick(item.question, item.answer)
                    }
                  >
                    {item.question}
                  </button>
                ))}
              </div>
            )}
            {selectedQuestion && (
              <button onClick={handleBackToQuestions}>Back to Questions</button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
