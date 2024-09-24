import React from 'react';
import Chat from "../../components/chat/chat";
import CodeEditor from "../../components/codeEditor/codeEditor";
import "./playground.css";

function Playground() {
  return (
    <React.Fragment>
      <div className="chatbot">
        <Chat />
      </div>
      <div className="codeeditor">
        <CodeEditor />
      </div>
    </React.Fragment>
  );
}

export default Playground;
