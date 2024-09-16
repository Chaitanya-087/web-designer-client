import React from 'react';
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import 'codemirror/addon/edit/closebrackets';
import 'codemirror/addon/edit/matchbrackets';
import 'codemirror/addon/edit/closetag';
import './codeeditor/codeEditor.css'
import { Controlled as ControlledEditor } from 'react-codemirror2';

function Editor({ language, displayName, value, onChange }) {
    function handleChange(editor, data, value) {
        onChange(value);
    }

    return (
        <div className="code-mirror-wrapper">
          <div className="editor-title">
          {displayName}
          </div>
            <ControlledEditor
                onBeforeChange={handleChange}
                value={value}
                className="CodeMirror"
                options={{
                    lineWrapping: true,
                    lint: true,
                    mode: language,
                    lineNumbers: true,
                    theme: 'material',
                    autoCloseBrackets: true,
                    matchBrackets: true,
                    highlightNonMatching: true,
                    autoCloseTags: true,
                    fullScreen: true,
                    tabSize: 2,
                }}
            />
        </div>
    );
}

export default Editor;
