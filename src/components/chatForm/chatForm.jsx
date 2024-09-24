import React from 'react'
import { AiOutlineSend } from 'react-icons/ai'
import './chatForm.css'

function ChatForm(props) {
    const {prompt,setPrompt,postPrompt} = props
  return (
    <div className="input-prompt">
        <input
          type="text"
          placeholder="Enter a prompt here"
          value={prompt}
          id="prompt"
          onChange={(e) => setPrompt(e.target.value)}
        />
        <div className="send-icon">
          <AiOutlineSend onClick={postPrompt} />
        </div>
        <div className="footer">
          <div className="footer-text">
            Powered by{" "}
            <a
              href="https://gemini.google.com/"
              target="_blank"
              rel="noreferrer"
            >
              GeminiAI
            </a>
          </div>
        </div>
      </div>
  )
}

export default ChatForm
