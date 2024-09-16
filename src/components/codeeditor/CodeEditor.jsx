import React, { useEffect, useState } from 'react';
import './codeEditor.css'
import Editor from '../Editor';

function CodeEditor() {
    const [activePage, setActivePage] = useState('html');
    const [html, setHtml] = useState('');
    const [css, setCss] = useState('');
    const [js, setJs] = useState('');
    const [srcDoc, setSrcDoc] = useState('');

    useEffect(() => {
        const timeout = setTimeout(() => {
            setSrcDoc(`
                <html>
                  <body>${html}</body>
                  <style>${css}</style>
                  <script>${js}</script>
                </html>
            `);
        }, 250);

        return () => clearTimeout(timeout);
    }, [html, css, js]);

    return (
        <>
            <div className="codeeditor-navbar">
                <button onClick={() => setActivePage('html')}>HTML</button>
                <button onClick={() => setActivePage('css')}>CSS</button>
                <button onClick={() => setActivePage('javascript')}>JavaScript</button>
                <button onClick={() => setActivePage('preview')}>Preview</button>
            </div>
            <div className="codeeditor-content">
                {activePage === 'html' && (
                    <Editor
                        language="xml"
                        displayName="HTML"
                        value={html}
                        onChange={setHtml}
                    />
                )}
                {activePage === 'css' && (
                    <Editor
                        language="css"
                        displayName="CSS"
                        value={css}
                        onChange={setCss}
                    />
                )}
                {activePage === 'javascript' && (
                    <Editor
                        language="javascript"
                        displayName="JavaScript"
                        value={js}
                        onChange={setJs}
                    />
                )}
                {activePage === 'preview' && (
                    <div>
                        <iframe
                            srcDoc={srcDoc}
                            title="output"
                            sandbox="allow-scripts"
                            width="100%"
                            height="100%"
                            className="full-screenable-node"
                        />
                    </div>
                )}
            </div>
        </>
    );
}

export default CodeEditor;
