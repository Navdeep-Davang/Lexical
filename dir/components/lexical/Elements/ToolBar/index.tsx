import React from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  AlignCenterIcon,
  AlignLeftIcon,
  AlignRightIcon,
  BoldIcon,
  ChevronDown,
  HighlighterIcon,
  ItalicIcon,
  Redo2Icon,
  UnderlineIcon,
  Undo2Icon,
} from 'lucide-react'
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
import {
  UNDO_COMMAND,
  REDO_COMMAND,  
} from 'lexical'
import {
  clearFormatting,
  formatBulletList,
  formatCheckList,
  formatCode,
  formatHeading,
  formatNumberedList,
  formatParagraph,
  formatQuote,
} from '../../Plugins/ToolBarPlugin/utils'

export const ToolBar = () => {
  const [editor] = useLexicalComposerContext()

  const handleUndo = () => {
    editor.dispatchCommand(UNDO_COMMAND, undefined)
  }

  const handleRedo = () => {
    editor.dispatchCommand(REDO_COMMAND, undefined)
  }

  const handleClearFormatting = () => {
    editor.update(() => {
      clearFormatting(editor)
    })
  }

  const handleTextFormat = (format: string) => {
    editor.update(() => {
      if (format === 'paragraph') {
        formatParagraph(editor)
      } else if (format === 'quote') {
        formatQuote(editor, 'quote')
      }
      // Add other text formatting cases as needed
    })
  }

  return (
    <div className="inline-flex self-start flex-wrap px-4 py-2 bg-neutral-800/20 rounded-xl justify-center items-center gap-2">
      {/* Undo / Redo Buttons */}
      <div className="flex items-center gap-4">
        <button
          className="p-2 hover:bg-neutral-700 rounded-md"
          aria-label="Undo"
          onClick={handleUndo}
        >
          <Undo2Icon />
        </button>
        <button
          className="p-2 hover:bg-neutral-700 rounded-md"
          aria-label="Redo"
          onClick={handleRedo}
        >
          <Redo2Icon />
        </button>
      </div>

      {/* Text Format Dropdown */}
      <div className="bg-white/20 rounded-lg">
        <Select>
          <SelectTrigger className="h-full px-3 flex items-center justify-between gap-2 text-sm text-white font-medium">
            <SelectValue placeholder="Body 1" />
            <ChevronDown className="w-4 h-4 text-white" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem
              value="body1"
              onClick={() => handleTextFormat('paragraph')}
            >
              Body 1
            </SelectItem>
            <SelectItem
              value="heading1"
              onClick={() => formatHeading(editor, 'Heading 1', 'h1')}
            >
              Heading 1
            </SelectItem>
            <SelectItem
              value="heading2"
              onClick={() => formatHeading(editor, 'Heading 2', 'h2')}
            >
              Heading 2
            </SelectItem>
            <SelectItem value="quote" onClick={() => formatQuote(editor, 'quote')}>
              Quote
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Text Styling Icons */}
      <div className="flex items-center gap-2">
        <button
          className="p-2 hover:bg-neutral-700 rounded-md"
          aria-label="Bold"
          onClick={() => formatCode(editor, 'code')}
        >
          <BoldIcon />
        </button>
        <button
          className="p-2 hover:bg-neutral-700 rounded-md"
          aria-label="Italic"
          onClick={() => handleClearFormatting()}
        >
          <ItalicIcon />
        </button>
        <button
          className="p-2 hover:bg-neutral-700 rounded-md"
          aria-label="Underline"
          onClick={() => formatBulletList(editor, 'bulletlist')}
        >
          <UnderlineIcon />
        </button>
      </div>

      {/* Highlight Dropdown */}
      <div className="relative">
        <button
          className="p-2 hover:bg-neutral-700 rounded-md flex items-center gap-1"
          aria-label="Highlight"
          onClick={() => formatCheckList(editor, 'check')}
        >
          <HighlighterIcon />
          <ChevronDown />
        </button>
      </div>

      {/* Text Alignment Icons */}
      <div className="flex items-center gap-2">
        <button
          className="p-2 hover:bg-neutral-700 rounded-md"
          aria-label="Align Left"
          onClick={() => formatNumberedList(editor, 'number')}
        >
          <AlignLeftIcon />
        </button>
        <button
          className="p-2 hover:bg-neutral-700 rounded-md"
          aria-label="Align Center"
          onClick={() => formatCheckList(editor,  'check')}
        >
          <AlignCenterIcon />
        </button>
        <button
          className="p-2 hover:bg-neutral-700 rounded-md"
          aria-label="Align Right"
          onClick={() => formatBulletList(editor, 'bullet')}
        >
          <AlignRightIcon />
        </button>
      </div>
    </div>
  )
}
