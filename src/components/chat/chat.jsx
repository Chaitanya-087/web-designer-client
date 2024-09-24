import { useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { useParams } from "react-router-dom";
import axios from "axios";

import ChatForm from "../chatForm/chatForm";
import "./chat.css";
import { div } from "framer-motion/client";

function Chat() {
  const { chatId } = useParams();
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState([]);

  const postPrompt = async () => {
    console.log("Posting prompt...");
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`http://localhost:8080/chats/${chatId}`);
      const data = await res.data;
      console.log(data);
      setMessages(data.messages);
    };
    fetchData();
    return () => {
      console.log("cleanup");
    };
  }, []);

  return (
    <>
      <div className="chat-container">
        {prompt ? (
          <div className="chat-message user">
            <div className="chat-message-text">{prompt}</div>
          </div>
        ) : null}
        {messages.map((message) => (
          <div className="chat-message" key={message.id}>
            {/* <div className="chat-message">
              <div className="chat-message-text">
                <SyntaxHighlighter language="html" style={a11yDark}>
                  {message.ht}
                </SyntaxHighlighter>
              </div>
            </div>

            <div className="chat-message">
              <div className="chat-message-text">
                <SyntaxHighlighter language="css" style={a11yDark}>
                  {AIRespoinse.css}
                </SyntaxHighlighter>
              </div>
            </div>

            <div className="chat-message">
              <div className="chat-message-text">
                <SyntaxHighlighter language="javascript" style={a11yDark}>
                  {AIRespoinse.js}
                </SyntaxHighlighter>
              </div>
            </div> */}
            {JSON.stringify(message)}
          </div>

        ))}
      </div>
      <ChatForm prompt={prompt} setPrompt={setPrompt} postPrompt={postPrompt} />
    </>
  );
}

export default Chat;
