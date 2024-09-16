import Chatbot from "./chatbot/Chatbot";
import CodeEditor from "./codeeditor/CodeEditor";
import "./index.css";
import Split from 'react-split'

function Index() {
  return (
    <Split className="split"   minSize={500}
>

      <div className="chatbot">
        <Chatbot />
      </div>
    
      <div className="codeeditor">
        <CodeEditor />
      </div>
    </Split>
  );
}

export default Index;
