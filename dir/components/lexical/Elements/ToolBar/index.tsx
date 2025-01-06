import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { AlignCenterIcon, AlignLeftIcon, AlignRightIcon, BoldIcon, ChevronDown, HighlighterIcon, ItalicIcon, Redo2Icon, UnderlineIcon, Undo2Icon } from 'lucide-react'
import React from 'react'

export const ToolBar = () => {
  
  return (
  <div className="flex-wrap  px-4 py-2 bg-neutral-800/20 rounded-xl flex justify-start items-center gap-2">
   
    <div className="flex items-center gap-4">
      <button className="p-2 hover:bg-neutral-700 rounded-md" aria-label="Undo">
        <Undo2Icon />        
      </button>
      <button className="p-2 hover:bg-neutral-700 rounded-md" aria-label="Redo">        
        <Redo2Icon/>        
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
          <SelectItem value="body1">Body 1</SelectItem>
          <SelectItem value="heading1">Heading 1</SelectItem>
          <SelectItem value="heading2">Heading 2</SelectItem>
          <SelectItem value="quote">Quote</SelectItem>
        </SelectContent>
      </Select>
    </div>
  
    {/* Text Styling Icons */}
    <div className="flex items-center gap-2">
      <button className="p-2 hover:bg-neutral-700 rounded-md" aria-label="Bold">       
          <BoldIcon/>        
      </button>
      <button className="p-2 hover:bg-neutral-700 rounded-md" aria-label="Italic">
        <ItalicIcon/>
      </button>
      <button className="p-2 hover:bg-neutral-700 rounded-md" aria-label="Underline">
        <UnderlineIcon/>
      </button>
    </div>
  
    {/* Highlight Dropdown */}
    <div className="relative">
      <button className="p-2 hover:bg-neutral-700 rounded-md flex items-center gap-1" aria-label="Highlight">
        <HighlighterIcon/>
        <ChevronDown/>
      </button>      
    </div>
  
    {/* Text Alignment Icons */}
    <div className="flex items-center gap-2">
      <button className="p-2 hover:bg-neutral-700 rounded-md" aria-label="Align Left">
        <AlignLeftIcon />
      </button>
      <button className="p-2 hover:bg-neutral-700 rounded-md" aria-label="Align Center">
        <AlignCenterIcon />
      </button>
      <button className="p-2 hover:bg-neutral-700 rounded-md" aria-label="Align Right">
        <AlignRightIcon />
      </button>
    </div>
  </div>  
  )

}
