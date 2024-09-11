import { AiOutlineSend } from "react-icons/ai";
import "./chatbot.css";
import { IoSendSharp } from "react-icons/io5";
import { input } from "framer-motion/client";
import { useRef, useState } from "react";
import axios from "axios";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

function Chatbot() {

    const [prompt, setPrompt] = useState("");
    const [AIRespoinse, setAIResponse] = useState("");

    const postPrompt = async () => {
        const res = await axios.post("http://localhost:8080/sendPrompt", { content: prompt });
        console.log(res);
        setAIResponse(res.data);
    }

    return (
        <div className="chatbot">
            <div className="chat-container">
         
                {prompt ?
                 <div className="chat-message user">
                        <div className="chat-message-text">{prompt}</div>
                    </div>
                :null}
                {AIRespoinse ?
                <>
                <div className="chat-message">
                    <div className="chat-message-text">
                        <SyntaxHighlighter language="html" style={a11yDark}>
                            {AIRespoinse.html}
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
                </div>
                </>
                : null}
            </div>
            <div className="input-prompt">
                <input type="text" placeholder="Enter a prompt here" value={prompt} id="prompt" onChange={e => setPrompt(e.target.value)} />
                <div className="send-icon">
                    <AiOutlineSend onClick={postPrompt} />
                </div>
                <div className="footer">
                    <div className="footer-text">Powered by <a href="https://gemini.google.com/" target="_blank" rel="noreferrer">GeminiAI</a></div>
                </div>
            </div>
        </div>
    );
}

export default Chatbot;