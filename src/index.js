import commands from './commands';
import styles from './styles.scss'

export default (editor, opts = {}) => {
    const style = (styles).replaceAll("#{$prefix}",editor.getConfig('stylePrefix'))
    const styleEl     = document.createElement("style");
    styleEl.type      = 'text/css';
    styleEl.appendChild(document.createTextNode(style));
    document.head.appendChild(styleEl);


    const options = {
        ...{
            panelId: 'views-container', //Panel to append the code editor
            appendTo: '', //Append to element instead of views-container
            openState: { //State when open
              cv: '65%',
              pn: '35%'
            },
            closedState: { //State when closed
              cv: '85%',
              pn: '15%'
            },
            classOpenCode: { // Use class on open
                cv: "code-editor-aberto",
                pn: "code-editor-aberto"
            }, 
            preserveWidth: false, //Stop resizing openState and closedState
            editJs: false, //Allow editing of javascript, set allowScripts to true for this to work
            htmlBtnText: 'Aplicar', //Save HTML button text
            cssBtnText: 'Aplicar', //Save CSS button text
            blockPage: null, // Object loading
            acceptJS: false, // Accept JS in html code
            configEditor: {
                wordWrap: "on",
                minimap: { enabled: false },
                scrollBeyondLastLine: false,
                contextmenu: false,
                fixedOverflowWidgets: true, // Render widgets outside of the container
                showFoldingControls: 'always',
                suggestOnTriggerCharacters: true,
                lineDecorationsWidth: 0,
                tabSize: 3,
                formatOnType: true,
                formatOnPaste: true,
                autoIndent: true,
                autoClosingBrackets: true,
                autoClosingPairs: true,
                fontSize: "12px",
                scrollbar: {
                  verticalScrollbarSize: 8,
                  horizontal: 'hidden',
                  // alwaysConsumeMouseWheel: false, ?
                },
            }
        },
        ...opts
    };

    // Load commands
    commands(editor, options);
};
