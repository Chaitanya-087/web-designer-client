import React from 'react';
import './default.css';
import Chat from '../../components/chat/chat';

function Default() {
    return (
        <div>
            <div>
                <h1>Welcome to the chatbot playground</h1>
                <p>Click on a chat on the left to start chatting</p>
                <Chat />
            </div>
            <div>
                <h1>Code editor</h1>
                <p>Write code here</p>
            </div>
        </div>
    );
}

export default Default;
