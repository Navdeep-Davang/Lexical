'use client'

import {AutoFocusPlugin} from '@lexical/react/LexicalAutoFocusPlugin';
import {LexicalComposer} from '@lexical/react/LexicalComposer';
import {RichTextPlugin} from '@lexical/react/LexicalRichTextPlugin';
import {ContentEditable} from '@lexical/react/LexicalContentEditable';
import {HistoryPlugin} from '@lexical/react/LexicalHistoryPlugin';
import {LexicalErrorBoundary} from '@lexical/react/LexicalErrorBoundary';
import { onError } from '../../Error';
import { theme } from '../../Theme';
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';
import { LinkPlugin } from '@lexical/react/LexicalLinkPlugin';
import { ListPlugin } from '@lexical/react/LexicalListPlugin';
import { TablePlugin } from '@lexical/react/LexicalTablePlugin';
import { TabIndentationPlugin } from '@lexical/react/LexicalTabIndentationPlugin';
import { AutoLinkPlugin } from '@lexical/react/LexicalAutoLinkPlugin';
import { onChange } from '../../Plugins/OnChangePlugin/onChange';
import { MATCHERS } from '../../Plugins/AutoLinkPlugin/matchers';
import { ClearEditorPlugin } from '@lexical/react/LexicalClearEditorPlugin';
import { MarkdownShortcutPlugin } from '@lexical/react/LexicalMarkdownShortcutPlugin';
import { TableOfContentsPlugin } from '@lexical/react/LexicalTableOfContentsPlugin';
import { TableOfContent } from '../../Plugins/TableOfContentsPlugin/TableOfContent';
import { EditorRefPlugin } from '@lexical/react/LexicalEditorRefPlugin';
import { useRef, useState } from 'react';
import { SelectionAlwaysOnDisplay } from '@lexical/react/LexicalSelectionAlwaysOnDisplay';
import { LexNodes } from '../../Nodes';
import { useSettings } from '../../Context/SettingsContext';
import ShortcutsPlugin from '../../Plugins/ShortcutsPlugin';



// Catch any errors that occur during Lexical updates and log them
// or throw them as needed. If you don't throw them, Lexical will
// try to recover gracefully without losing user data.


function LexEditor() {
  const [activeEditor, setActiveEditor] = useState(editor);
  const [isLinkEditMode, setIsLinkEditMode] = useState<boolean>(false);

  const {
    settings: {    
      isRichText  
    },
  } = useSettings();

  const initialConfig = {
    namespace: 'LexEditor',
    nodes: [...LexNodes],
    theme,
    onError,
  };

  const editorRef = useRef(null);

  return (     

      <div className="bg-orange-200/20 w-full h-4/5 p-4">
        <LexicalComposer initialConfig={initialConfig}>
          <RichTextPlugin
            contentEditable={<ContentEditable className='focus:outline-none' />}           
            ErrorBoundary={LexicalErrorBoundary}
          />
          
          
          {isRichText && (
            <ShortcutsPlugin
              editor={activeEditor}
              setIsLinkEditMode={setIsLinkEditMode}
            />
          )}


          <AutoFocusPlugin />
          <OnChangePlugin onChange={onChange} />
          <HistoryPlugin />
          <LinkPlugin />
          <ListPlugin />
          <TablePlugin />
          <TabIndentationPlugin />
          <AutoLinkPlugin matchers={MATCHERS} />
          <ClearEditorPlugin />
          <MarkdownShortcutPlugin />

          <TableOfContentsPlugin>
            {(tableOfContentsArray) => {
              return (
                <TableOfContent tableOfContents={tableOfContentsArray} />
              );
            }}
          </TableOfContentsPlugin>

          <EditorRefPlugin editorRef={editorRef} />
          <SelectionAlwaysOnDisplay />
        </LexicalComposer>
      </div>
  );
}

export default LexEditor