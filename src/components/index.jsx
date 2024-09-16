import Chatbot from "./chatbot/Chatbot";
import CodeEditor from "./codeeditor/CodeEditor";
import "./index.css";
import Split from 'react-split';
import Sidebar from "./sidebar/Sidebar";


function Index() {
  return (
    <>
      <Split className="split" minSize={200} maxSize={700}>
        <Sidebar />
        <div className="chatbot">
          <Chatbot />
        </div>

        <div className="codeeditor">
          <CodeEditor />
        </div>
      </Split>
    </>
  );
}

export default Index;
