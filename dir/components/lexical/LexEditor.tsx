'use client'

import {AutoFocusPlugin} from '@lexical/react/LexicalAutoFocusPlugin';
import {LexicalComposer} from '@lexical/react/LexicalComposer';
import {RichTextPlugin} from '@lexical/react/LexicalRichTextPlugin';
import {ContentEditable} from '@lexical/react/LexicalContentEditable';
import {HistoryPlugin} from '@lexical/react/LexicalHistoryPlugin';
import {LexicalErrorBoundary} from '@lexical/react/LexicalErrorBoundary';
import { onError } from './Error';
import { theme } from './Theme';
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';
import { LinkPlugin } from '@lexical/react/LexicalLinkPlugin';
import { ListPlugin } from '@lexical/react/LexicalListPlugin';
import { TablePlugin } from '@lexical/react/LexicalTablePlugin';
import { TabIndentationPlugin } from '@lexical/react/LexicalTabIndentationPlugin';
import { AutoLinkPlugin } from '@lexical/react/LexicalAutoLinkPlugin';
import { onChange } from './Plugins/OnChangePlugin/onChange';
import { MATCHERS } from './Plugins/AutoLinkPlugin/matchers';



// Catch any errors that occur during Lexical updates and log them
// or throw them as needed. If you don't throw them, Lexical will
// try to recover gracefully without losing user data.


function LexEditor() {
  const initialConfig = {
    namespace: 'MyLexicalEditor',
    theme,
    onError,
  };

 

  return (     

      <div className="bg-orange-200/10 w-4/5 h-4/5">
        <LexicalComposer initialConfig={initialConfig}>
          <RichTextPlugin
            contentEditable={<ContentEditable />}           
            ErrorBoundary={LexicalErrorBoundary}
          />
          
          <AutoFocusPlugin />
          <OnChangePlugin onChange={onChange} />
          <HistoryPlugin />
          <LinkPlugin />
          <ListPlugin />
          <TablePlugin />
          <TabIndentationPlugin />
          <AutoLinkPlugin matchers={MATCHERS} />
        </LexicalComposer>
      </div>
  );
}

export default LexEditor